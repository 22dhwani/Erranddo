import { DocumentData, QueryDocumentSnapshot, Timestamp, addDoc, collection, doc, getDoc, getDocs, limit, onSnapshot, orderBy, query, serverTimestamp, setDoc, startAfter } from "firebase/firestore";
import { useCallback, useEffect, useRef, useState } from "react";
import { db, storage } from "../Firebase";
import { UserData } from "../models/user";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 } from "uuid";

export function useFirebaseChat(
  senderData?: UserData,
  receiverData?: UserData,
  options?: {
    pageSize?: number,
    onInitialChatLoaded?: () => void,
  }
) {
  const [sender, setSender] = useState(senderData);
  const [receiver, setReceiver] = useState(receiverData);

  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const [sending, setSending] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const pageSizeRef = useRef(options?.pageSize ?? 12);

  const initialChatLoaded = useRef(false);

  const [hasMore, setHasMore] = useState(true);

  const [progress, setProgress] = useState<number>();

  useEffect(() => {
    if (!initialChatLoaded.current && messages.length && options?.onInitialChatLoaded) {
      initialChatLoaded.current = true;
      options?.onInitialChatLoaded();
      return;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages.length]);

  // Format and handles the new messages. 
  const handleSetMessage = useCallback((msgs: ChatMessage[], type: 'start' | 'end') => {
    return setMessages((messages) => {
      let newMessages: ChatMessage[] = [];
      if (type === 'start') {
        newMessages = [...msgs, ...messages];
      }
      if (type === 'end') {
        newMessages = [...messages, ...msgs];
      }

      return newMessages.filter((obj, index) => {
        return index === newMessages.findIndex(o => obj.id === o.id);
      })
    });
  }, []);

  // Update sender and receiver on change
  useEffect(() => {
    setSender((s) => s?.id == senderData?.id ? s : senderData);
    setReceiver((r) => r?.id == receiverData?.id ? r : receiverData);
  }, [senderData, receiverData]);

  // Create chat between sender and receiver if not exists. (function)
  const createChat = useCallback(async (sender: UserData, receiver: UserData) => {
    try {
      setLoading(true);
      const combinedId = generateChatId(sender.id, receiver.id);

      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        const loginUser = {
          id: sender.id,
          fullName: sender.full_name,
        };

        const otherUser = {
          id: receiver.id,
          fullName: receiver.full_name,
        };

        const chatData = {
          chat_id: combinedId,
          users_ids: [loginUser.id, sender.id],
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
        await setDoc(doc(db, "chats", combinedId), chatData);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }, []);

  // Create chat between sender and receiver if not exists. (function called here)
  useEffect(() => {
    if (!sender || !receiver) return
    createChat(sender, receiver);
  }, [sender, receiver, createChat]);

  // format chat messages. (function)
  const formatMessages = useCallback(<T extends QueryDocumentSnapshot<DocumentData, DocumentData> | QueryDocumentSnapshot<DocumentData, DocumentData>[]>(docs: T): T extends Array<unknown> ? ChatMessage[] : ChatMessage => {
    if (Array.isArray(docs)) {
      return docs.map((doc) => {
        const data = doc?.data({
          serverTimestamps: 'estimate'
        });

        return ({ ...data, id: doc.id })
      }) as T extends unknown[] ? ChatMessage[] : ChatMessage;
    }

    return ({ ...docs?.data({ serverTimestamps: 'estimate' }), id: docs.id }) as T extends unknown[] ? ChatMessage[] : ChatMessage;
  }, []);

  // get chats messages between sender and receiver after start time. (function)
  const getChatMessages = useCallback(async (sender: UserData, receiver: UserData, startAfterTime?: Timestamp) => {
    try {
      const combinedId = generateChatId(sender.id, receiver.id);
      const pageSize = pageSizeRef.current;

      const chatRef = collection(
        db,
        "chats",
        combinedId,
        "messages",
      );
      let getMessagesQuery = query(
        chatRef,
        orderBy("timestamp", "desc"),
        limit(pageSize),
      );

      if (startAfterTime) {
        getMessagesQuery = query(
          chatRef,
          orderBy("timestamp", "desc"),
          startAfter(startAfterTime),
          limit(pageSize),
        );
      }

      const docs = await getDocs(getMessagesQuery);

      if (!docs.docs.length || docs.docs.length !== pageSize) {
        setHasMore(false);
      }

      return formatMessages(docs.docs);
    } catch (err) {
      console.log(err);
      return [];
    }
  }, [formatMessages]);

  // called first time when sender and receiver are set to get chat messages between them.
  useEffect(() => {
    if (!sender || !receiver || loading) return
    setLoading(true);
    getChatMessages(sender, receiver).then((chats) => {
      setLoading(false);
      handleSetMessage(chats ?? [], 'start');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sender, receiver]);

  // listen to latest message when arrive add to array of messages.
  useEffect(() => {
    if (!sender || !receiver) return;
    const combinedId = generateChatId(sender.id, receiver.id);

    const chatRef = collection(
      db,
      "chats",
      combinedId,
      "messages",
    );

    const getMessagesQuery = query(
      chatRef,
      orderBy("timestamp", "desc"),
      limit(1),
    );

    const unsub = onSnapshot(getMessagesQuery, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log("New messages: ", change.doc.data());
          handleSetMessage([formatMessages(change.doc)], 'start')
        }
        if (change.type === "modified") {
          setMessages((messages) => messages.map((m) => m.id === change.doc.id ? formatMessages(change.doc) : m))
          console.log("Modified messages: ", change.doc.data());
        }
        if (change.type === "removed") {
          console.log("Removed messages: ", change.doc.data());
        }
      });
    });

    return () => unsub();
  }, [formatMessages, handleSetMessage, receiver, sender]);

  // called first time when sender and receiver are set to get chat messages between them. (function)
  const sendMessage = useCallback(async (message: string) => {
    try {
      if (!sender || !receiver) return;

      setSending(true);

      const combinedId = generateChatId(sender.id, receiver.id);

      const chatRef = collection(
        db,
        "chats",
        combinedId,
        "messages",
      );

      const doc = await addDoc(
        chatRef,
        {
          message: message,
          sender_id: sender.id,
          timestamp: serverTimestamp(),
          type: "text",
        }
      )

      setSending(false);

      return doc;
    } catch (err) {
      setSending(false);
      console.log(err);
    }
  }, [receiver, sender]);

  // called first time when sender and receiver are set to get chat messages between them. (function)
  const sendFile = useCallback(async (file: File) => {
    try {
      if (!sender || !receiver) return;

      setSending(true);

      const combinedId = generateChatId(sender.id, receiver.id);

      const chatRef = collection(
        db,
        "chats",
        combinedId,
        "messages",
      );

      const extension = file.name.slice((file.name.lastIndexOf(".") - 1 >>> 0) + 2);

      const imgRef = ref(storage, `chats/${combinedId}/${uniqueFileNameGenerator()}.${extension}`)

      const uploadTask = uploadBytesResumable(imgRef, file);

      let fileType = "file"

      if (extension === "png" || extension === "jpg" || extension === "jpeg") {
        fileType = "image"
      } else if (extension === "pdf") {
        fileType = "pdf"
      }

      uploadTask.on('state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setProgress(progress);

          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (_error) => {
          // Handle unsuccessful uploads
          setProgress(undefined);
          setSending(false);
          // TODO: handle error or show error
        },
        async () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          try {
            const url = await getDownloadURL(uploadTask.snapshot.ref);

            await addDoc(chatRef, {
              file: url,
              file_name: file.name,
              sender_id: sender.id,
              timestamp: serverTimestamp(),
              type: fileType,
            })

            setProgress(undefined);
            setSending(false);
          } catch (error) {
            setProgress(undefined);
            setSending(false);
          }
        }
      );
    } catch (err) {
      setProgress(undefined);
      setSending(false);
      console.log(err);
    }
  }, [receiver, sender]);

  // load more chat messages after last message. (function)
  const loadMore = useCallback(async () => {
    try {

      if (!sender || !receiver || !hasMore || loading || loadingMore) return;
      setLoadingMore(true);
      const timestamp = messages && messages?.length ? messages[messages.length - 1].timestamp : undefined;

      const chats = await getChatMessages(sender, receiver, timestamp)

      if (!chats) return;

      handleSetMessage(chats, 'end');
      setLoadingMore(false);
    } catch (err) {
      setLoadingMore(false);
      console.log(err);
    }
  }, [getChatMessages, handleSetMessage, hasMore, loading, loadingMore, messages, receiver, sender]);

  return {
    messages,
    sendMessage,
    loadMore,
    loading,
    sending,
    hasMore,
    loadingMore,
    sendFile,
    progress,
  };
}

export const generateChatId = (id1: string | number, id2: string | number) => {
  return +id1 < +id2 ? id1 + "-" + id2 : id2 + "-" + id1
}

export interface ChatMessage {
  id: string,
  message?: string,
  sender_id: number,
  timestamp: Timestamp,
  type: 'image' | 'pdf' | 'text' | 'file',
  file?: string
  file_name?: string
}

const uniqueFileNameGenerator = () => {
  return `${v4().toString()}${new Date().getTime()}`;
}