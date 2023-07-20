import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Heading from "../../../UI/Heading";
import HomeCard from "../../dashboard/home/HomeCard";
import usericon from "../../../../assets/user-image.png";
import boticon from "../../../../assets/user-image-big.png";
import icon1 from "../../../../assets/camera.svg";
import icon2 from "../../../../assets/clip.svg";
import icon3 from "../../../../assets/emoji.svg";
import icon4 from "../../../../assets/notification.svg";
import icon5 from "../../../../assets/search.svg";
import icon6 from "../../../../assets/like.svg";
import Button from "../../../UI/Button";
import { addDoc, collection, doc, getDocs, onSnapshot, orderBy, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "../../../../Firebase";
import { useNavigate } from "react-router";

function ChatItems() {
  const [userInput, setUserInput] = useState("");
  const divRef = useRef<HTMLDivElement>(null);
  const [chats, setChats] = useState<any>([]);
  const currentUser = { uid: "1", fullName: "wewew", photoURL: "" }
  const user = { uid: "2", fullName: "hello", photoURL: "" }
  const combinedId =
    +currentUser.uid < +user?.uid
      ? currentUser.uid + "-" + user?.uid
      : user?.uid + "-" + currentUser.uid;
  const fetchData = async () => {
    const getChatQuery = query(
      collection(db, "chats"),
      where("chat_id", "==", combinedId)
    );
    const getChatDocument = await getDocs(getChatQuery);
    if (getChatDocument.docs.length > 0) {
      const getMessagesQuery = query(
        collection(db, "chats", getChatDocument.docs[0].id, "messages"),
        orderBy("timestamp")
      );
      await onSnapshot(getMessagesQuery, async (querySnapshot) => {
        await setChats(
          await querySnapshot.docs?.map((doc) => {
            console.log(doc?.data());
            const temp = doc?.data();
            return temp ? temp : [];
          })
        );
      });
    }
    else {
      console.log('Not exist');
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

  const handleSendMessage = async () => {
    const getChatQuery = query(
      collection(db, "chats"),
      where("chat_id", "==", combinedId)
    );
    const getChatDocument = await getDocs(getChatQuery);
    await addDoc(
      collection(db, "chats", getChatDocument.docs[0].id, "messages"),
      {
        message: userInput,
        sender_id: currentUser.uid,
        timestamp: new Date(),
        type: "text",
      }
    );
    setUserInput("");
  };
  const MIN_TEXTAREA_HEIGHT = 16;
  const MAX_TEXTAREA_HEIGHT = 60;
  const isSmallScreen = window.innerWidth <= 640;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useLayoutEffect(() => {
    if (textareaRef?.current) {
      // Reset height - important to shrink on delete
      textareaRef.current.style.height = "inherit";
      // Set height
      textareaRef.current.style.height = `${Math.max(
        textareaRef.current.scrollHeight,
        MIN_TEXTAREA_HEIGHT
      )}px`;
    }
  }, [userInput]);
  return (
    <div>
      <HomeCard className="rounded-md px-5 pb-5 lg:h-[85vh] ">
        <div className="py-4 flex justify-between">
          <Heading
            text={`Messages`}
            variant="subHeader"
            headingclassName="!font-bold text-textColor text-xl tracking-wide dark:text-white"
          />
          <div className="flex gap-3 lg:hidden">
            <img src={icon4} className="w-4 h-4" alt="Notification" />
            <img src={icon5} className="w-4 h-4" alt="Search" />
            <img src={icon6} className="w-4 h-4" alt="Like" />
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-poppins-bold text-xl">Peter</p>
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
                className={`flex gap-3 justify-start my-3 ${message?.sender_id === "2" ? "justify-start" : "justify-end"
                  }`}
              >
                {message?.sender_id === "2" && (
                  <img src={usericon} className="w-8 h-8" alt="User Icon" />
                )}
                <div
                  className={`rounded-lg p-2 ${message?.sender_id === "2"
                    ? "bg-gray-200"
                    : "bg-blue-500 text-white"
                    }`}
                  style={{ maxWidth: "70%" }}
                >
                  <div className="  w-full break-all">{message?.message}</div>
                  <div className="text-xs text-gray-6 00">{message?.time}</div>
                </div>
                {message?.sender_id !== "2" && (
                  <img src={boticon} className="w-8 h-8" alt="Bot Icon" />
                )}
              </div>
            ))}
          </div>
          <form
            onSubmit={(e: React.FormEvent) => {
              e.preventDefault();
              handleSendMessage();
            }}
          >
            <div className="mt-4 flex gap-4">
              {/* <input
                type="text"
                placeholder="Type your message..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              /> */}
              <textarea
                onChange={(e) => setUserInput(e.target.value)}
                ref={textareaRef}
                style={{
                  minHeight: MIN_TEXTAREA_HEIGHT,
                  maxHeight: MAX_TEXTAREA_HEIGHT,
                  resize: "none"
                }}
                rows={1}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 break-all"
                value={userInput}
              />
              <img src={icon1} alt="Camera Icon" />
              <img src={icon2} alt="Clip Icon" />
              <img src={icon3} alt="Emoji Icon" />
              <Button
                type="submit"
                buttonClassName="ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2"
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </HomeCard>
    </div>
  );
}

export default ChatItems;
