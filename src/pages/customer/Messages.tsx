import MessagesDetailMainPage from "../../components/customer/services/messages/MessagesDetailMainPage";
import TopBar from "../../components/customer/services/top-bar/TopBar";

function Messages() {
  return (
    <div className="overflow-x-hidden">
      <TopBar />
      <div className="xl:mt-[8.651474530831099vh] lg:mt-[9.651474530831099vh] xs:mt-[9.051474530831099vh] xl:px-36 lg:px-20 xs:px-5     ">
        <MessagesDetailMainPage />
      </div>
    </div>
  );
}

export default Messages;
