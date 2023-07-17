import { useState } from "react";
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

function ChatItems() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { id: "1", content: "Hello!", sender: "user", time: "23:32" },
    { id: "2", content: "Hi there!", sender: "bot", time: "23:32" },
    { id: "1", content: "How are you?", sender: "user", time: "23:32" },
    { id: "2", content: "I am good!", sender: "bot", time: "23:32" },
    { id: "2", content: "What about you?", sender: "bot", time: "23:32" },
    { id: "1", content: "I am good too.", sender: "user", time: "23:32" },
    {
      id: "1",
      content: "Did you like our services?",
      sender: "user",
      time: "23:32",
    },
    {
      id: "2",
      content:
        "Indeed! I found out that among all of them you have the cheapest services to offer your customer.",
      sender: "bot",
      time: "23:32",
    },
    {
      id: "1",
      content:
        "Oh well than! I would like you to just give a review about our sevices in the comment section so that people would reach to us! It would be great if you could help us.",
      sender: "user",
      time: "23:32",
    },
  ]);

  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const handleSendMessage = () => {
    const newMessage = {
      id: userInput === "1" ? "1" : "2",
      content: userInput,
      sender: "bot",
      time: getCurrentTime(),
    };
    setMessages([...messages, newMessage]);
    setUserInput("");
  };

  const isSmallScreen = window.innerWidth <= 640;

  return (
    <div>
      <HomeCard className="rounded-md px-5 pb-5 lg:h-[85vh]">
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
          <div className="lg:flex gap-3 justify-end my-2 xs:hidden">
            <img src={icon4} className="w-5 h-5" alt="Notification" />
            <img src={icon5} className="w-5 h-5" alt="Search" />
            <img src={icon6} className="w-5 h-5" alt="Like" />
          </div>
          <div className="3xl:h-[70vh] lg:h-[57vh] xs:h-[65vh] overflow-y-scroll">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 justify-start my-3 ${
                  message.sender === "user" ? "justify-start" : "justify-end"
                }`}
              >
                {message.sender === "user" && (
                  <img src={usericon} className="w-8 h-8" alt="User Icon" />
                )}
                <div
                  className={`rounded-lg p-2 ${
                    message.sender === "user"
                      ? "bg-gray-200"
                      : "bg-blue-500 text-white"
                  }`}
                  style={{ maxWidth: "70%" }}
                >
                  {message.content}
                  <div className="text-xs text-gray-6 00">{message.time}</div>
                </div>
                {message.sender !== "user" && (
                  <img src={boticon} className="w-8 h-8" alt="Bot Icon" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-4">
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
            <Button
              buttonClassName="ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2"
              onClick={handleSendMessage}
            >
              Send
            </Button>
          </div>
        </div>
      </HomeCard>
    </div>
  );
}

export default ChatItems;
