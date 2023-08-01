import { createContext, useContext } from "react";


type ChatResposneType = {
    addChat: (user_id: number, message: string) => void;
};

export const ChatContext = createContext<ChatResposneType>({
    addChat: (user_id: number, message: string) => console.log(user_id, message),
});
// addChat: (user_id: number, message: string) => console.log(user_id, message),

const ChatContextProvider = (props: {
    children: React.ReactNode;
}) => {

    const AddChat = async (user_id: number, message: string) => {
        const token = localStorage.getItem("token");
        // const formData: any = {
        //     user_id: user_id,
        //     message: message,
        // }
        const res = await fetch(
            `https://erranddo.kodecreators.com/api/v1/chat/send-notification?user_id=${user_id}&message=${message}`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        if (res.status === 200) {
            const data: any = await res.json();
        } else {
            const data: any = await res.json();
        }
    }
    return (
        <ChatContext.Provider
            value={{
                addChat: AddChat
            }}
        >
            {props.children}
        </ChatContext.Provider>
    )

}

export function useChat() {
    const chatCtx = useContext(ChatContext);
    return chatCtx;
}

export default ChatContextProvider;