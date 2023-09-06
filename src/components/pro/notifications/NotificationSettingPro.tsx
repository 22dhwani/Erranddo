import TogglerBar from "../../UI/ToggleBar";

function NotificationSettingPro(props: { question: string }) {
  return (
    <div className="w-full items-center flex justify-center ">
      <div className="bg-white py-2 lg:px-16 sm:px-10 flex flex-col dark:bg-dimGray xl:w-3/5 xs:w-full dark:text-white">
        <div className="border-b-2">
          <div className="flex flex-row justify-between pb-2">
            <div>{props.question}</div>
            <div className="flex flex-row space-x-10">
              <div>
                <TogglerBar status={false} />
              </div>
              <div>
                <TogglerBar status={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationSettingPro;
