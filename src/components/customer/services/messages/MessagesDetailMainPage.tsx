import { EmojiClickData } from "emoji-picker-react"
import React, { useLayoutEffect, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import useSWR from "swr"
import BackArrow from "../../../../assets/BackArrow"
import Camera from "../../../../assets/Camera"
import Clip from "../../../../assets/Clip"
import Download from "../../../../assets/Download"
import Emoji from "../../../../assets/Emoji"
import Like from "../../../../assets/Like"
import Notification from "../../../../assets/Notification"
import Edit from "../../../../assets/edit.svg"
import NoImage from "../../../../assets/no-photo.png"
import Search from "../../../../assets/search"
import { useFirebaseChat } from "../../../../hooks/useFirebaseChat"
import FileUploadModal from "../../../../layout/chat-modals/FileUploadModal"
import { UserData } from "../../../../models/user"
import { useAuth } from "../../../../store/customer/auth-context"
import { useChatCustomer } from "../../../../store/customer/customer-chat-context"
import { fetcher } from "../../../../store/customer/home-context"
import { useNotification } from "../../../../store/customer/notification-context"
import { useTheme } from "../../../../store/theme-context"
import Button from "../../../UI/Button"
import EmojiKyeboard from "../../../UI/EmojiKyeboard"
import FullPageLoading from "../../../UI/FullPageLoading"
import Heading from "../../../UI/Heading"

// const initialPageSize = 12
const MessagesDetailMainPage = () => {
  const businessUserId = useLocation()?.state?.id
  const serviceName = useLocation()?.state?.name
  const businessName = useLocation()?.state?.businessName
  const quote = useLocation()?.state?.quote
  const requestId = useLocation()?.state?.requestId

  const { create } = useNotification()
  const businessDisplayPhoto = useLocation()?.state?.displayPhoto

  const [userInput, setUserInput] = useState("") //input value
  const divRef = useRef<HTMLDivElement>(null) //ref to set the height
  const { addChat } = useChatCustomer()

  const { userData } = useAuth()
  const anotherUserDetailUrl = `https://erranddo.kodecreators.com/api/v1/user/detail?user_id=${businessUserId}`
  const { data: userdata } = useSWR(anotherUserDetailUrl, fetcher)
  const anotherUserDetail: UserData = userdata?.data

  const { messages, sendMessage, loadMore, hasMore, loading, loadingMore, sending, sendFile } = useFirebaseChat(userData, anotherUserDetail, {
    onInitialChatLoaded: () => {
      if (!divRef.current) return
      divRef.current.scrollTop = divRef.current.scrollHeight
    },
  })

  const user = {
    uid: userData?.id,
    fullName: userData?.full_name,
    photoURL: userData?.img_avatar,
  } //login user

  const currentUser = {
    uid: businessUserId,
    fullName: anotherUserDetail?.full_name,
    photoURL: businessDisplayPhoto,
  }

  const handleScroll = () => {
    if (loadingMore || !hasMore || !divRef.current) return
    const maxScrollHeight = divRef.current?.scrollHeight - divRef.current?.clientHeight
    const scrollTop = maxScrollHeight + divRef.current.scrollTop

    if (!scrollTop || scrollTop > 300) return
    loadMore()
  }

  const handleSendMessage = async () => {
    if (sending) return
    const msg = userInput.trim()

    if (!msg || msg === "") return

    const formData = new FormData()
    formData.set("user_id", userData?.id?.toString() ?? "")
    formData.set("for_pro", "0")
    formData.set("id", requestId)

    create(formData)
    if (userData?.id) addChat(userData?.id ?? 0, msg)

    sendMessage(msg)

    setUserInput("")
  }

  const [show, setShow] = useState(false)
  const [imageModal, setImageModal] = useState(false)

  const { theme } = useTheme()

  const MIN_TEXTAREA_HEIGHT = 16
  const MAX_TEXTAREA_HEIGHT = 60

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useLayoutEffect(() => {
    console.log("layout")
    if (textareaRef?.current) {
      textareaRef.current.style.height = "inherit"
      textareaRef.current.style.height = `${Math.max(textareaRef.current.scrollHeight, MIN_TEXTAREA_HEIGHT)}px`
    }
  }, [userInput])

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  async function aDownload(filename: string, url: string) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })

    const data = await response.blob()
    const a = document.createElement("a")
    a.href = window.URL.createObjectURL(data)
    a.setAttribute("download", filename)
    a.click()
  }

  const finalChats = messages

  const navigate = useNavigate()
  return (
    <div className='py-5 relative'>
      {imageModal && (
        <FileUploadModal
          onCancel={() => {
            setImageModal(false)
          }}
          onUpload={(file) => {
            sendFile(file)
            setImageModal(false)
          }}
        />
      )}
      <div className='py-4  bg-slate-100 dark:bg-black shadow-md '>
        <div className='flex justify-between mb-4 border-b-[0.5px] border-b-slate-300 pb-1 lg:px-5 xs:px-2 '>
          <div className='flex gap-4 items-center'>
            <div className='flex gap-2 items-center' onClick={() => navigate(-1)}>
              {theme === "light" && <div children={<BackArrow color='black' />} />}
              {theme === "dark" && <div children={<BackArrow color='white' />} />}
            </div>
            <div className='flex flex-col my-1'>
              <Heading text={businessName} variant='headingTitle' headingclassname='font-poppins !text-lg !font-bold tracking-wide capitalize' />
              <Heading text={serviceName} variant='subHeader' headingclassname='font-poppins text-sm capitalize' />
              {useLocation().state.isQuote && <div className='bg-white text-primaryYellow py-2 lg:hidden'>{quote}</div>}
            </div>
          </div>
          <div className='lg:flex gap-3 justify-end my-2 xs:hidden items-center'>
            {useLocation().state.isQuote && <div className='bg-white text-primaryYellow py-2 px-2 rounded-md'>{quote}</div>}

            {theme === "light" && <div children={<Notification color='#1A1B1C' />} />}
            {theme === "dark" && <div children={<Notification color='white' />} />}
            {theme === "light" && <div children={<Search color='#1A1B1C' />} />}
            {theme === "dark" && <div children={<Search color='white' />} />}
            {theme === "light" && <div children={<Like color='#1A1B1C' />} />}
            {theme === "dark" && <div children={<Like color='white' />} />}
          </div>
        </div>
        <div
          ref={divRef}
          // onWheel={handleScroll}
          onScroll={handleScroll}
          className='2xl:h-[65vh] flex flex-col-reverse xl:h-[68vh] lg:h-[77vh] md:h-[77vh] xs:h-[72vh] overflow-y-scroll pb-10 soft-searchbar lg:px-5 xs:px-2'
        >
          {loading && <FullPageLoading className='h-full !bg-transparent' />}
          {loadingMore && !loading && <FullPageLoading className='h-10 !bg-transparent' />}
          {!loading &&
            finalChats?.map((message) => (
              <div key={message.id} className={`flex gap-3 justify-start my-3 ${message?.sender_id === user?.uid ? "justify-end" : "justify-start"}`}>
                {message?.sender_id === user?.uid && <img src={user?.photoURL ? `https://erranddo.kodecreators.com/storage/${user?.photoURL}` : NoImage} className='w-8 h-8 rounded-full object-cover' alt='User Icon' />}
                <div className={`rounded-lg px-2 py-1 w-max ${message?.sender_id === user?.uid ? " bg-blue-500 text-white dark:bg-dimGray" : "bg-gray-200 text-gray-600"}`} style={{ maxWidth: "70%" }}>
                  {message?.message && <div className='  w-full break-all p-2 '>{message?.message}</div>}
                  {message?.file && message?.type === "image" && (
                    <div className='  w-full break-all p-0.5 '>
                      <a href={message?.file} target='_blank' rel='noreferrer'>
                        <img src={message?.file} className='h-64 object-contain w-full rounded-lg' />
                      </a>
                    </div>
                  )}
                  {message?.file && message?.file_name && message?.type === "pdf" ? (
                    <div className='  w-full break-all p-2 '>
                      <div className='flex gap-2'>
                        {message?.file_name}
                        {<div children={<Download color='white' />} onClick={() => aDownload(message?.file_name ?? "", message?.file ?? "")} />}
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}

                  <div className='text-xs text-white text-end p-1'>
                    {new Date(message?.timestamp?.seconds * 1000).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </div>
                </div>
                {message?.sender_id !== user?.uid && <img src={currentUser?.photoURL} className='w-8 h-8 rounded-full' alt='Bot Icon' />}
              </div>
            ))}
          {!loading && finalChats?.length === 0 && (
            <div className='flex justify-center items-center h-full text-slate-400 font-semibold text-lg gap-3'>
              <img src={Edit} />
              Start a new chat
            </div>
          )}
        </div>
        {/* <div className=" xs:h-[60vh]  3xl:h-[70vh] overflow-y-scroll soft-sidebar"></div> */}
        <div className=' w-full sticky bottom-0  xl:py-3 lg:py-0 xs:py-2 lg:px-5 xs:px-2 bg-slate-100 dark:bg-black'>
          <form
            className=' flex lg:gap-4  items-center    '
            onSubmit={(e: React.FormEvent) => {
              e.preventDefault()
              handleSendMessage()
            }}
          >
            <textarea
              onChange={(e) => {
                setShow(false)
                e.target.value.replace(" ", "")
                setUserInput(!userInput ? e.target.value.replace(" ", "") : e.target.value)
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
              className='w-full border border-gray-300 rounded-lg px-3 py-2 break-all'
              value={userInput}
              placeholder='Type your message...'
            />
            <div className='xs:hidden lg:flex gap-4'>
              {theme === "light" && <div children={<Camera color='#1A1B1C' />} />}
              {theme === "dark" && <div children={<Camera color='white' />} />}
              {theme === "light" && (
                <div
                  children={<Clip color='#1A1B1C' />}
                  onClick={() => {
                    setImageModal(!imageModal)
                  }}
                />
              )}
              {theme === "dark" && (
                <div
                  children={<Clip color='white' />}
                  onClick={() => {
                    setImageModal(!imageModal)
                  }}
                />
              )}
              {theme === "light" && <div children={<Emoji color='#1A1B1C' />} onClick={() => setShow(!show)} />}
              {theme === "dark" && <div children={<Emoji color='white' />} onClick={() => setShow(!show)} />}
            </div>
            {show && (
              <EmojiKyeboard
                onChange={(emojiObject: EmojiClickData) => {
                  setUserInput(userInput + emojiObject.emoji)
                }}
              />
            )}

            <Button
              centerClassName='flex justify-center items-center'
              disabled={userInput.length === 0 || userInput === "" || sending}
              buttonClassName='ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 w-24 disabled:text-white mt-1.5 h-full'
              type='submit'
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MessagesDetailMainPage
