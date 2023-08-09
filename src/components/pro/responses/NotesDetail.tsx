import { useState } from "react";
import Heading from "../../UI/Heading";
import HomeCard from "../dashboard/home/HomeCard";
import Button from "../../UI/Button";

function NotesDetail() {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event: any) => {
    setMessage(event.target.value);
  };
  return (
    <div>
      <HomeCard className="rounded-md  px-5 pb-5">
        <div className="py-4 border-b-[0.5px] border-b-slate-200">
          <Heading
            text={`Notes`}
            variant="subHeader"
            headingclassname="!font-bold  text-textColor flex justify-center  text-xl tracking-wide dark:text-white"
          />
        </div>
        <div className="flex flex-col gap-3 justify-between py-4">
          <textarea
            id="description"
            name="description"
            rows={16}
            className="resize-none block p-2.5 w-full text-sm text-gray-900  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
            value={message}
            onChange={handleMessageChange}
          ></textarea>
          <div className="ml-auto">
            <Button
              variant="filled"
              color="primary"
              size="normal"
              children="Submit"
              buttonClassName="!py-2"
              centerClassName="flex items-center justify-center"
            />
          </div>
        </div>
      </HomeCard>
    </div>
  );
}

export default NotesDetail;
