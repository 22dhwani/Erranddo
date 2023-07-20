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
import Button from "../../../UI/Button";

const MessagesDetailMainPage = () => {
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
      });
    } else {
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
  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  //send message
  const handleSendMessage = async () => {
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
        sender_id: currentUser.uid,
        timestamp: new Date(),
        type: "text",
      }
    );
    setUserInput("");
  };
  return (
    <div className="px-5  xs:py-5  ">
      <div className="py-4 px-5 bg-slate-100  shadow-md">
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
            <img src={icon4} className="w-5 h-5" alt="Notification" />
            <img src={icon5} className="w-5 h-5" alt="Search" />
            <img src={icon6} className="w-5 h-5" alt="Like" />
          </div>
        </div>
        <div
          ref={divRef}
          className="2xl:h-[63vh] flex flex-col xl:h-[59vh] lg:h-[50vh] xs:h-[60vh] overflow-y-scroll"
        >
          {chats?.map((message: any) => (
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
                    ? "bg-gray-200"
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
        </div>
        <div className=" xs:h-[60vh]  3xl:h-[70vh] overflow-y-scroll soft-sidebar"></div>
        <div className="bg-slate-100 flex gap-4 sticky bottom-0 py-3 rounded-lg">
          <input
            type="text"
            placeholder="Type your message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
          <img src={icon1} alt="Camera Icon" />
          <img src={icon2} alt="Clip Icon" />
          <img src={icon3} alt="Emoji Icon" />
          <form
            onSubmit={(e: React.FormEvent) => {
              e.preventDefault();
              handleSendMessage();
            }}
          >
            <Button
              buttonClassName="ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2"
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
