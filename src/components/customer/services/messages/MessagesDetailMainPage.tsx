import React, { useEffect, useRef, useState } from "react";
import Heading from "../../../UI/Heading";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../../../Firebase";
import usericon from "../../../../assets/user-image.png";
import boticon from "../../../../assets/user-image-big.png";
import icon1 from "../../../../assets/camera.svg";
import icon2 from "../../../../assets/clip.svg";
import icon3 from "../../../../assets/emoji.svg";
import icon4 from "../../../../assets/notification.svg";
import icon5 from "../../../../assets/search.svg";
import icon6 from "../../../../assets/like.svg";
import Edit from "../../../../assets/edit.svg";
import Button from "../../../UI/Button";
import Input from "../../../UI/Input";
import FullPageLoading from "../../../UI/FullPageLoading";
import EmojiKyeboard from "../../../UI/EmojiKyeboard";
import { EmojiClickData } from "emoji-picker-react";
import { useTheme } from "../../../../store/theme-context";
import Camera from "../../../../assets/Camera";
import Clip from "../../../../assets/Clip";
import Emoji from "../../../../assets/Emoji";
import Like from "../../../../assets/Like";
import Notification from "../../../../assets/Notification";
import Search from "../../../../assets/search";

const MessagesDetailMainPage = () => {
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState(""); //input value
  const divRef = useRef<HTMLDivElement>(null); //ref to set the height
  const [chats, setChats] = useState<any>([]); //chats

  const user = { uid: "1", fullName: "wewew", photoURL: "" };
  const currentUser = { uid: "2", fullName: "hello", photoURL: "" };
  const combinedId =
    +currentUser.uid < +user?.uid
      ? currentUser.uid + "-" + user?.uid
      : user?.uid + "-" + currentUser.uid;
  console.log(combinedId, "sdfgd");

  const fetchData = async () => {
    setLoading(true);
    const getChatQuery = query(
      collection(db, "chats"),
      where("chat_id", "==", combinedId)
    );
    const getChatDocument = await getDocs(getChatQuery);
    console.log(getChatDocument.docs, "jkjk");

    if (getChatDocument.docs.length > 0) {
      const getMessagesQuery = query(
        collection(db, "chats", getChatDocument.docs[0].id, "messages"),
        orderBy("timestamp")
      );

      await onSnapshot(getMessagesQuery, async (querySnapshot) => {
        await setChats(
          await querySnapshot.docs?.map((doc) => {
            const temp = doc?.data();
            return temp ? temp : [];
          })
        );
        setLoading(false);
      });
    } else {
      setLoading(false);
      console.log("uyuyvvy TANDOOOOO NOT EXiSTS");
    }
  };
  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  }, [chats]);
  useEffect(() => {
    fetchData();
  }, []);

  //send message
  const handleSendMessage = async () => {
    setShow(false);
    setUserInput("");
    //return when spaces
    const nonWhiteSpaceRegex = /\S/;
    if (!nonWhiteSpaceRegex.test(userInput)) {
      return;
    }
    const getChatQuery = query(
      collection(db, "chats"),
      where("chat_id", "==", combinedId)
    );
    const getChatDocument = await getDocs(getChatQuery);
    console.log(getChatDocument, "dfsgdgd");

    await addDoc(
      collection(db, "chats", getChatDocument.docs[0].id, "messages"), //docs[0] is already exisiting doc
      {
        message: userInput,
        sender_id: user.uid,
        timestamp: new Date(),
        type: "text",
      }
    );
  };
  const [show, setShow] = useState(false);
  const { theme } = useTheme();

  return (
    <div className="px-5  xs:py-5  ">
      <div className="py-4 px-5 bg-slate-100 dark:bg-black shadow-md">
        <div className="flex justify-between mb-4 border-b-[0.5px] border-b-slate-300 pb-1">
          <div className="flex gap-4 items-center">
            <div className="flex flex-col my-1">
              <Heading
                text="Durva Brahmbhatt "
                variant="headingTitle"
                headingclassName="font-poppins !text-lg !font-bold tracking-wide"
              />
              <Heading
                text="Service"
                variant="subHeader"
                headingclassName="font-poppins text-sm"
              />
            </div>
          </div>
          <div className="lg:flex gap-3 justify-end my-2 xs:hidden">
            {theme === "light" && (
              <div children={<Notification color="black" />} />
            )}
            {theme === "dark" && (
              <div children={<Notification color="white" />} />
            )}
            {theme === "light" && <div children={<Search color="black" />} />}
            {theme === "dark" && <div children={<Search color="white" />} />}
            {theme === "light" && <div children={<Like color="black" />} />}
            {theme === "dark" && <div children={<Like color="white" />} />}
          </div>
        </div>
        <div
          ref={divRef}
          className="2xl:h-[63vh] flex flex-col xl:h-[59vh] lg:h-[50vh] xs:h-[60vh] overflow-y-scroll"
        >
          {loading && <FullPageLoading className="h-full !bg-transparent" />}
          {!loading &&
            chats?.map((message: any) => (
              <div
                key={message?.sender_id}
                className={`flex gap-3 justify-start my-3 ${
                  message?.sender_id === "2" ? "justify-start" : "justify-end"
                }`}
              >
                {message?.sender_id === "2" && (
                  <img src={usericon} className="w-8 h-8" alt="User Icon" />
                )}
                <div
                  className={`rounded-lg p-2 ${
                    message?.sender_id === "2"
                      ? "bg-gray-200 dark:bg-dimGray"
                      : "bg-blue-500 text-white"
                  }`}
                  style={{ maxWidth: "70%" }}
                >
                  {message?.message}
                  <div className="text-xs text-gray-6 00">{message?.time}</div>
                </div>
                {message?.sender_id !== "2" && (
                  <img src={boticon} className="w-8 h-8" alt="Bot Icon" />
                )}
              </div>
            ))}
          {!loading && chats.length === 0 && (
            <div className="flex justify-center items-center h-full text-slate-400 font-semibold text-lg gap-3">
              <img src={Edit} />
              Start a New Chat
            </div>
          )}
        </div>
        <div className=" xs:h-[60vh]  3xl:h-[70vh] overflow-y-scroll soft-sidebar"></div>
        <div className="  sticky bottom-0  rounded-lg py-3">
          <form
            className="bg-slate-100 flex gap-4 sticky items-center bottom-0  rounded-lg dark:bg-black"
            onSubmit={(e: React.FormEvent) => {
              e.preventDefault();
              handleSendMessage();
            }}
          >
            <Input
              type="text"
              placeholder="Type your message..."
              value={userInput}
              onMouseEnter={() => setShow(false)}
              onChange={(e: any) => {
                setShow(false);
                e.target.value.replace(" ", "");
                console.log(e.target.value, "dfef");
                setUserInput(
                  !userInput ? e.target.value.replace(" ", "") : e.target.value
                );
              }}
              className="w-full border border-gray-300 rounded-lg  bg-white "
            />
            {theme === "light" && <div children={<Camera color="black" />} />}
            {theme === "dark" && <div children={<Camera color="white" />} />}
            {theme === "light" && <div children={<Clip color="black" />} />}
            {theme === "dark" && <div children={<Clip color="white" />} />}
            {theme === "light" && <div children={<Emoji color="black" />} />}
            {theme === "dark" && <div children={<Emoji color="white" />} />}

            {show && (
              <EmojiKyeboard
                onChange={(emojiObject: EmojiClickData) => {
                  console.log(emojiObject);
                  setUserInput(userInput + emojiObject.emoji);
                }}
              />
            )}

            <Button
              centerClassName="flex justify-center items-center"
              disabled={userInput.length === 0 || userInput === ""}
              buttonClassName="ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 w-24 disabled:text-white"
              type="submit"
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessagesDetailMainPage;
