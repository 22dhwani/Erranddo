import Heading from "../../UI/Heading";
import HomeCard from "../dashboard/home/HomeCard";
import { NavLink } from "react-router-dom";
import LocationIcon from "../../../assets/LocationIcon";
import Outright from "../../../assets/outright.svg";
import Credit from "../../../assets/Credit.svg";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../../../Firebase";

import { useTheme } from "../../../store/theme-context";
import { useState } from "react";

function ResponsesListItem(props: {
  time: any;
  title: string;
  subTitle: string[];
  answers: string[];
  location: string;
}) {
  const { theme } = useTheme();
  // const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const currentUser = { uid: "1", fullName: "wewew", photoURL: "" };
  const user = { uid: "2", fullName: "hello", photoURL: "" };
  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      +currentUser.uid < +user?.uid
        ? currentUser.uid + "-" + user?.uid
        : user?.uid + "-" + currentUser.uid;
    console.log(combinedId);

    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      const getChatQuery = query(collection(db, "chats"), where("chat_id", "==", combinedId));
      const getChatDocument = await getDocs(getChatQuery);

      if (!res.exists() && getChatDocument.empty) {
        const usersObject: any = {};
        usersObject[1] = currentUser;
        usersObject[2] = user;
        const loginUser = {
          id: "loginUserId",
          fullName: "John Doe",
        };

        const otherUser = {
          id: "otherUserId",
          fullName: "Jane Smith",
        };
        const chatData = {
          chat_id: combinedId,
          users_ids: [currentUser.uid, user.uid],
          updated_at: serverTimestamp(),
          created_at: serverTimestamp(),
          users: [
            {
              user_id: loginUser.id,
              badge: 0,
              full_name: loginUser.fullName,
            },
            {
              user_id: otherUser.id,
              badge: 0,
              full_name: otherUser.fullName,
            },
          ],
        };
        //create a chat in chats collection
        const temp = await addDoc(collection(db, "chats"), { ...chatData });
        console.log(temp.id);
        await addDoc(collection(db, "chats", temp.id, "messages"), {
          message: "hello",
        });
      }
    } catch (err) {
      console.log(err);
    }
    // setUser(null);
    // setUsername("")
  };
  return (
    <HomeCard className="px-3 pt-5 pb-3">
      <NavLink
        to={`/pro/responses/:id`}
        style={({ isActive }) =>
          isActive ? { color: "#DF994F" } : { color: "black" }
        }
        onClick={handleSelect}
      >
        <div className="flex w-full justify-between items-center">
          <Heading
            text={props.title}
            variant="subTitle"
            headingclassName="!font-bold  !text-base mx-1 tracking-wide dark:text-white"
          />
          <Heading
            text={`Purchased ${props.time} ago`}
            variant="subHeader"
            headingclassName="!font-medium !text-xs mx-1 text-primaryBlue tracking-wide dark:text-white"
          />
        </div>
      </NavLink>
      <div className="flex flex-col mt-3 gap-2">
        <div className="flex flex-wrap">
          {props.subTitle.map((item) => {
            return (
              <div className="flex">
                <Heading
                  text={`${item}`}
                  variant="smallTitle"
                  headingclassName="!font-semibold !text-md tracking-wide dark:text-white "
                />
                <Heading
                  text={`|`}
                  variant="smallTitle"
                  headingclassName="font-light !text-md mx-2 tracking-wide dark:text-white "
                />
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap">
          {props.answers.map((item) => {
            return (
              <div className="flex">
                <Heading
                  text={`${item}`}
                  variant="smallTitle"
                  headingclassName="!font-light !text-xs   tracking-wide dark:text-white text-textColor"
                />
                <Heading
                  text={`-`}
                  variant="smallTitle"
                  headingclassName="font-light !text-xs mx-2 tracking-wide dark:text-white text-textColor"
                />
              </div>
            );
          })}
        </div>
        <div className="flex items-center my-1 gap-2">
          {theme === "light" && (
            <div children={<LocationIcon color="black" />} />
          )}

          {theme === "dark" && (
            <div children={<LocationIcon color="white" />} />
          )}
          <Heading
            text={`${props.location}`}
            variant="smallTitle"
            headingclassName="!font-extralight text-slate-400 !text-xs  tracking-wide dark:text-white "
          />
        </div>
        <div className="flex justify-between w-full items-center">
          <div className="flex gap-1 ">
            <div className="  w-5 h-5 mt-1 rounded-full">
              <img src={Outright} />
            </div>
            <Heading
              text={`Bought Outright`}
              variant="smallTitle"
              headingclassName="!font-semibold !text-xs   tracking-wide text-primaryGreen dark:text-primaryGreen"
            />
          </div>
        </div>
      </div>
    </HomeCard>
  );
}

export default ResponsesListItem;
