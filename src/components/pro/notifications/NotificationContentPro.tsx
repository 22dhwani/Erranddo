import { useEffect, useState } from "react";
import dot from "../../../assets/goldendot.svg";
function NotificationContentPro() {
  const notificationDetails = [
    {
      name: "John Grant",
      time: "09:42",
      description:
        "Had TV Guru come out to get our TV wall mounted and we are very impressed with the service.",
      date: "25/03/2023",
      comment: "You got a new lead.",
    },

    {
      name: "Peter Andrew",
      time: "09:42",
      description:
        "Had TV Guru come out to get our TV wall mounted and we are very impressed with the service.",
      date: "25/03/2023",
      comment: "Customer requested a for a quote.",
    },
    {
      name: "James Smith",
      time: " 09:42",
      description:
        "Had TV Guru come out to get our TV wall mounted and we are very impressed with the service.",
      date: "25/03/2023",
      comment: "You got a review for your business",
    },
    {
      name: "Jay Ward",
      time: "09:42",
      description:
        "Had TV Guru come out to get our TV wall mounted and we are very impressed with the service.",
      date: "25/03/2023",
      comment: "New chat from customer",
    },
    {
      name: "John Grant",
      time: "09:42",
      description:
        "Had TV Guru come out to get our TV wall mounted and we are very impressed with the service.",
      date: "25/03/2023",
      comment: "Customer closed a request.",
    },

    {
      name: "Peter Andrew",
      time: "09:42",
      description:
        "Had TV Guru come out to get our TV wall mounted and we are very impressed with the service.",
      date: "25/03/2023",
      comment: "You got a new lead.",
    },
    {
      name: "James Smith",
      time: " 09:42",
      description:
        "Had TV Guru come out to get our TV wall mounted and we are very impressed with the service.",
      date: "25/03/2023",
      comment: "New chat from customer",
    },
    {
      name: "Jay Ward",
      time: "09:42",
      description:
        "Had TV Guru come out to get our TV wall mounted and we are very impressed with the service.",
      date: "25/03/2023",
      comment: "New chat from customer",
    },
  ];

  return (
    <div className="w-full items-center flex justify-center ">
      <div className="bg-white py-5 lg:px-14 xs:px-5 flex flex-col dark:bg-dimGray rounded-lg xl:w-3/5 xs:w-full dark:text-white">
        <div className="flex flex-col gap-2">
          {notificationDetails.map((item) => {
            return (
              <div className="md:flex flex-row gap-5">
                <div className="flex flex-row gap-4">
                  <img src={dot}></img>
                  <div>{item.time}</div>
                  <div>{item.date}</div>
                </div>
                <div className="xs:hidden md:flex">|</div>
                <div className="sm:flex md:flex flex-row gap-5">
                  <div className="text-primaryBlue">{item.name}</div>
                  <div>{item.comment}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NotificationContentPro;