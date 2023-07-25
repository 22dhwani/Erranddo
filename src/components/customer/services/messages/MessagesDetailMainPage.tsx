import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Heading from "../../../UI/Heading";
import {
  DocumentData,
  QueryDocumentSnapshot,
  addDoc,
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  startAfter,
  startAt,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../../../Firebase";
import usericon from "../../../../assets/user-image.png";
import boticon from "../../../../assets/user-image-big.png";

import Edit from "../../../../assets/edit.svg";
import Button from "../../../UI/Button";
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
import FileUploadModal from "../../../../layout/chat-modals/FileUploadModal";

const MessagesDetailMainPage = () => {
  const [loading, setLoading] = useState(false);
  const [moreloading, setMoreLoading] = useState(false);

  const [userInput, setUserInput] = useState(""); //input value
  const divRef = useRef<HTMLDivElement>(null); //ref to set the height

  const [chats, setChats] = useState<any>([]); //chats
  const [oldchats, setOldChats] = useState<any>([]); //chats

  const [localDocumentId, setLastDocumentId] = useState<
    QueryDocumentSnapshot<DocumentData, DocumentData> | undefined
  >();

  const [pageSize, setPageSize] = useState(10);
  const user = { uid: "5", fullName: "wewew", photoURL: "" };
  const currentUser = { uid: "6", fullName: "hello", photoURL: "" };
  const combinedId =
    +currentUser.uid < +user?.uid
      ? currentUser.uid + "-" + user?.uid
      : user?.uid + "-" + currentUser.uid;

  //handle scroll
  const fetchData = async () => {
    setLoading(true);
    const getChatQuery = query(
      collection(db, "chats"),
      where("chat_id", "==", combinedId)
    );
    const getChatDocument = await getDocs(getChatQuery);
    if (getChatDocument?.docs?.length > 0) {
      const chatRef = collection(
        db,
        "chats",
        getChatDocument.docs[0].id,
        "messages"
      );

      const getMessagesQuery = query(
        chatRef,
        orderBy("timestamp", "desc"),
        limit(5)
      );

      const docs = await getDocs(getMessagesQuery);
      const lastDoc = await docs.docs.at(-1);
      setLastDocumentId(lastDoc);

      console.log(docs.docs);

      setOldChats([
        ...docs.docs.map((doc) => doc?.data()).reverse(),
        ...oldchats,
      ]);
      setLoading(false);

      await setChats([...chats]);
      // setLastDocumentId(querySnapshot.docs[querySnapshot.docs.length - 1]);
      await onSnapshot(chatRef, async (querySnapshot) => {
        const newChats = querySnapshot.docs.map((doc) => doc?.data() ?? []);
        console.log(newChats.length);

        // setOldChats([
        //   ...querySnapshot.docs.map((doc) => doc?.data()).reverse(),
        //   ...oldchats,
        // ]);
      });
    } else {
      setLoading(false);
      console.log("uyuyvvy TANDOOOOO NOT EXiSTS");
    }
  };

  //handle scroll
  const moreData = async () => {
    const getChatQuery = query(
      collection(db, "chats"),
      where("chat_id", "==", combinedId)
    );
    const getChatDocument = await getDocs(getChatQuery);
    if (getChatDocument?.docs?.length > 0) {
      const chatRef = collection(
        db,
        "chats",
        getChatDocument.docs[0].id,
        "messages"
      );

      const getMessagesQuery = query(
        chatRef,
        orderBy("timestamp", "desc"),
        startAfter(localDocumentId),
        limit(5)
      );

      const docs = await getDocs(getMessagesQuery);
      const lastDoc = docs.docs.at(-1);
      setLastDocumentId(lastDoc);

      console.log(docs.docs);

      setOldChats([
        ...docs.docs.map((doc) => doc?.data()).reverse(),
        ...oldchats,
      ]);
      // await onSnapshot(getMessagesQuery, async (querySnapshot) => {
      //   const oldChatsNew = querySnapshot.docs.map((doc) => doc?.data() ?? []);
      // });
    }
  };
  // console.log(chats);
  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  }, [chats]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = () => {
    setMoreLoading(true);
    const container = divRef.current;
    if (container) {
      const { scrollTop } = container;
      if (scrollTop === 0) {
        setTimeout(() => setMoreLoading(false), 1000);
        moreData();
      }
    }
  };
  //send message
  const handleSendMessage = async () => {
    setShow(false);
    setUserInput("");
    setPageSize((prev) => prev + 1);
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
  const [imageModal, setImageModal] = useState(false);
  const { theme } = useTheme();
  const MIN_TEXTAREA_HEIGHT = 16;
  const MAX_TEXTAREA_HEIGHT = 60;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useLayoutEffect(() => {
    if (textareaRef?.current) {
      textareaRef.current.style.height = "inherit";
      textareaRef.current.style.height = `${Math.max(
        textareaRef.current.scrollHeight,
        MIN_TEXTAREA_HEIGHT
      )}px`;
    }
  }, [userInput]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  console.log(oldchats, "old");
  console.log(chats, "chats");

  const finalChats = [...oldchats, ...chats];

  return (
    <div className="py-5 relative">
      {imageModal && (
        <FileUploadModal
          onCancel={() => {
            setImageModal(false);
          }}
        />
      )}
      <div className="py-4  bg-slate-100 dark:bg-black shadow-md ">
        <div className="flex justify-between mb-4 border-b-[0.5px] border-b-slate-300 pb-1 lg:px-5 xs:px-2 ">
          <div className="flex gap-4 items-center">
            <div className="flex flex-col my-1" onClick={moreData}>
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
              <div children={<Notification color="#1A1B1C" />} />
            )}
            {theme === "dark" && (
              <div children={<Notification color="white" />} />
            )}
            {theme === "light" && <div children={<Search color="#1A1B1C" />} />}
            {theme === "dark" && <div children={<Search color="white" />} />}
            {theme === "light" && <div children={<Like color="#1A1B1C" />} />}
            {theme === "dark" && <div children={<Like color="white" />} />}
          </div>
        </div>
        <div
          // onWheel={handleScroll}
          onScroll={handleScroll}
          ref={divRef}
          className="2xl:h-[65vh] flex flex-col xl:h-[68vh] lg:h-[77vh] md:h-[77vh] xs:h-[72vh] overflow-y-scroll pb-10 soft-searchbar lg:px-5 xs:px-2"
        >
          {/* <button onClick={() => moreData()}>More</button> */}
          {loading && <FullPageLoading className="h-full !bg-transparent" />}
          {moreloading && !loading && (
            <FullPageLoading className="h-10 !bg-transparent" />
          )}

          <div>
            {!loading &&
              finalChats?.map((message: any, key: number) => (
                <div
                  key={key}
                  className={`flex gap-3 justify-start my-3 ${
                    message?.sender_id === "6" ? "justify-start" : "justify-end"
                  }`}
                >
                  {message?.sender_id === "6" && (
                    <img src={usericon} className="w-8 h-8" alt="User Icon" />
                  )}
                  <div
                    className={`rounded-lg px-2 py-1 w-max ${
                      message?.sender_id === "6"
                        ? "bg-gray-200 dark:bg-dimGray"
                        : "bg-blue-500 text-white"
                    }`}
                    style={{ maxWidth: "70%" }}
                  >
                    <div className="  w-full break-all  ">
                      {message?.message}
                    </div>
                    <div className="text-xs text-gray-6 00">
                      {message?.timestamp?.time}
                    </div>
                  </div>
                  {message?.sender_id !== "6" && (
                    <img src={boticon} className="w-8 h-8" alt="Bot Icon" />
                  )}
                </div>
              ))}
          </div>
          {!loading && chats?.length === 0 && (
            <div className="flex justify-center items-center h-full text-slate-400 font-semibold text-lg gap-3">
              <img src={Edit} />
              Start a New Chat
            </div>
          )}
        </div>
        {/* <div className=" xs:h-[60vh]  3xl:h-[70vh] overflow-y-scroll soft-sidebar"></div> */}
        <div className=" w-full sticky bottom-0  xl:py-3 lg:py-0 xs:py-2 lg:px-5 xs:px-2 bg-slate-100 dark:bg-black">
          <form
            className=" flex lg:gap-4  items-center    "
            onSubmit={(e: React.FormEvent) => {
              e.preventDefault();
              handleSendMessage();
            }}
          >
            <textarea
              onChange={(e: any) => {
                setShow(false);
                e.target.value.replace(" ", "");
                setUserInput(
                  !userInput ? e.target.value.replace(" ", "") : e.target.value
                );
              }}
              onKeyDown={handleKeyPress}
              onMouseEnter={() => setShow(false)}
              ref={textareaRef}
              style={{
                minHeight: MIN_TEXTAREA_HEIGHT,
                maxHeight: MAX_TEXTAREA_HEIGHT,
                resize: "none",
              }}
              rows={1}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 break-all"
              value={userInput}
              placeholder="Type yout message..."
            />
            <div className="xs:hidden lg:flex gap-4">
              {theme === "light" && (
                <div children={<Camera color="#1A1B1C" />} />
              )}
              {theme === "dark" && <div children={<Camera color="white" />} />}
              {theme === "light" && (
                <div
                  children={<Clip color="#1A1B1C" />}
                  onClick={() => {
                    setImageModal(!imageModal);
                  }}
                />
              )}
              {theme === "dark" && (
                <div
                  children={<Clip color="white" />}
                  onClick={() => {
                    setImageModal(!imageModal);
                  }}
                />
              )}
              {theme === "light" && (
                <div
                  children={<Emoji color="#1A1B1C" />}
                  onClick={() => setShow(!show)}
                />
              )}
              {theme === "dark" && (
                <div
                  children={<Emoji color="white" />}
                  onClick={() => setShow(!show)}
                />
              )}
            </div>
            {show && (
              <EmojiKyeboard
                onChange={(emojiObject: EmojiClickData) => {
                  setUserInput(userInput + emojiObject.emoji);
                }}
              />
            )}

            <Button
              centerClassName="flex justify-center items-center"
              disabled={userInput.length === 0 || userInput === ""}
              buttonClassName="ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 w-24 disabled:text-white mt-1.5 h-full"
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
