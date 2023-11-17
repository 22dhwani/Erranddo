import { useLayoutEffect, useRef, useState } from "react"
import NoImage from "../../../../assets/no-photo.png"
import Button from "../../../UI/Button"
import Heading from "../../../UI/Heading"
import HomeCard from "../../dashboard/home/HomeCard"

import { EmojiClickData } from "emoji-picker-react"
import { useLocation, useNavigate } from "react-router"
import useSWR from "swr"
import Camera from "../../../../assets/Camera"
import Clip from "../../../../assets/Clip"
import Download from "../../../../assets/Download"
import Emoji from "../../../../assets/Emoji"
import Like from "../../../../assets/Like"
import Notification from "../../../../assets/Notification"
import VerticalDots from "../../../../assets/VerticalDots"
import Edit from "../../../../assets/edit.svg"
import Search from "../../../../assets/search"
import { useFirebaseChat } from "../../../../hooks/useFirebaseChat"
import FileUploadModal from "../../../../layout/chat-modals/FileUploadModal"
import { UserData } from "../../../../models/user"
import { fetcher } from "../../../../store/customer/home-context"
import { useNotification } from "../../../../store/customer/notification-context"
import { useAuthPro } from "../../../../store/pro/auth-pro-context"
import { useChat } from "../../../../store/pro/chat-context"
import { useTheme } from "../../../../store/theme-context"
import EmojiKyeboard from "../../../UI/EmojiKyeboard"
import FullPageLoading from "../../../UI/FullPageLoading"

function ChatItems() {
  const { create } = useNotification()

  const [userInput, setUserInput] = useState("")
  const divRef = useRef<HTMLDivElement>(null)
  const { addChat } = useChat()

  const { userData } = useAuthPro()
  const location = useLocation()
  const anotherUserId = useLocation().state.userId
  const state = location.state
  const [show, setShow] = useState(false)

  const user = {
    uid: userData?.id,
    fullName: userData?.full_name,
    photoURL: userData?.img_avatar,
  } //login user

  const currentUser = {
    uid: state?.userId,
    fullName: state?.fullName,
    photoURL: state?.imgAvatar,
  }

  const anotherUserDetailUrl = `https://erranddo.kodecreators.com/api/v1/user/detail?user_id=${anotherUserId}`
  const { data: userdata } = useSWR(anotherUserDetailUrl, fetcher)
  const anotherUserDetail: UserData = userdata?.data

  const { messages, sendMessage, loadMore, hasMore, loading, loadingMore, sending, sendFile } = useFirebaseChat(userData, anotherUserDetail, {
    onInitialChatLoaded: () => {
      if (!divRef.current) return
      divRef.current.scrollTop = divRef.current.scrollHeight
    },
  })

  const [showDropdown, setShowDropdown] = useState(false)

  const handleScroll = () => {
    if (loadingMore || !hasMore || !divRef.current) return
    const maxScrollHeight = divRef.current?.scrollHeight - divRef.current?.clientHeight
    const scrollTop = maxScrollHeight + divRef.current.scrollTop

    if (!scrollTop || scrollTop > 200) return
    loadMore()
  }

  const handleSendMessage = async () => {
    if (sending) return
    const msg = userInput.trim()

    if (!msg || msg === "") return

    // const formData = new FormData()
    // formData.set("user_id", userData?.id?.toString() ?? "")
    // formData.set("for_pro", "0")
    // formData.set("id", requestId)

    // create(formData)
    if (userData?.id) addChat(userData?.id ?? 0, msg)

    sendMessage(msg)

    setUserInput("")
  }

  const [imageModal, setImageModal] = useState(false)
  const { theme } = useTheme()

  const MIN_TEXTAREA_HEIGHT = 16
  const MAX_TEXTAREA_HEIGHT = 60
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  useLayoutEffect(() => {
    if (textareaRef?.current) {
      // Reset height - important to shrink on delete
      textareaRef.current.style.height = "inherit"
      // Set height
      textareaRef.current.style.height = `${Math.max(textareaRef.current.scrollHeight, MIN_TEXTAREA_HEIGHT)}px`
    }
  }, [userInput])

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const isSmallScreen = window.innerWidth < 640

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown)
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
    <div className='relative'>
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
      <HomeCard className='rounded-md px-5 pb-5 lg:h-[85vh] '>
        <div className='py-4 flex justify-between'>
          <div className='flex items-center w-full justify-between'>
            <Heading text={`Messages`} variant='subHeader' headingclassname='!font-bold text-textColor text-xl tracking-wide dark:text-white' />
            <Button buttonClassName='!border-none' variant='ghost' onClick={() => navigate(-1)}>
              Back
            </Button>
          </div>
          <div className='flex gap-3 lg:hidden'>
            {theme === "light" && <div children={<Notification color='#1A1B1C' />} />}
            {theme === "dark" && <div children={<Notification color='white' />} />}
            {theme === "light" && <div children={<Search color='#1A1B1C' />} />}
            {theme === "dark" && <div children={<Search color='white' />} />}
            {theme === "light" && <div children={<Like color='#1A1B1C' />} />}
            {theme === "dark" && <div children={<Like color='white' />} />}
          </div>
        </div>
        <div className='bg-gray-100 dark:bg-black p-4 rounded-lg shadow-md'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='font-poppins-bold text-xl'>{currentUser?.fullName}</p>
            </div>
            <div className='lg:flex gap-3 justify-end my-2 xs:hidden'>
              {theme === "light" && <div children={<Notification color='#1A1B1C' />} />}
              {theme === "dark" && <div children={<Notification color='white' />} />}
              {theme === "light" && <div children={<Search color='#1A1B1C' />} />}
              {theme === "dark" && <div children={<Search color='white' />} />}
              {theme === "light" && <div children={<Like color='#1A1B1C' />} />}
              {theme === "dark" && <div children={<Like color='white' />} />}
            </div>
          </div>
          <div ref={divRef} onScroll={handleScroll} className='2xl:h-[60vh] flex flex-col-reverse xl:h-[50vh] lg:h-[50vh] md:h-[77vh] xs:h-[60vh] overflow-y-scroll pb-10 soft-searchbar lg:px-5 xs:px-2'>
            {loading && <FullPageLoading className='h-full !bg-transparent' />}
            {loadingMore && !loading && <FullPageLoading className='h-10 !bg-transparent' />}
            {!loading &&
              finalChats?.map((message) => (
                <div key={message?.id} className={`flex gap-3 justify-start my-3 ${message?.sender_id === currentUser?.uid ? "justify-start" : "justify-end"}`}>
                  {message?.sender_id === currentUser?.uid && (
                    <img src={currentUser?.photoURL ? `https://erranddo.kodecreators.com/storage/${currentUser?.photoURL}` : NoImage} className='w-8 h-8 rounded-full object-cover' alt='User Icon' />
                  )}
                  <div className={`rounded-lg  w-max ${message?.sender_id === user?.uid ? "bg-gray-200 dark:bg-dimGray" : "bg-blue-500 text-white"}`} style={{ maxWidth: "70%" }}>
                    {message?.message && <div className='  w-full break-all p-2 '>{message?.message}</div>}
                    {message?.file && message?.type === "image" && (
                      <div className='  w-full break-all p-0.5 '>
                        <a href={message?.file} target='_blank' rel='noreferrer'>
                          <img src={message?.file} className='h-64 object-contain w-full rounded-lg' />
                        </a>
                      </div>
                    )}
                    {message?.file && message.file_name && message?.type === "pdf" ? (
                      <div className='  w-full break-all p-2 '>
                        {/* <a href={message?.file} target="_blank"
                              rel="noreferrer"> */}
                        <div className='flex gap-2'>
                          {message?.file_name}
                          {<div children={<Download color='white' />} onClick={() => aDownload(message?.file_name ?? "", message?.file ?? "")} />}
                        </div>
                        {/* </a> */}
                      </div>
                    ) : (
                      <></>
                    )}

                    <div className='text-xs text-gray-600 text-end p-1'>
                      {/* {message?.timestamp.time} */}
                      {new Date(message?.timestamp?.seconds * 1000).toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                    </div>
                  </div>
                  {message?.sender_id !== currentUser?.uid && (
                    <img src={user?.photoURL ? `https://erranddo.kodecreators.com/storage/${user?.photoURL}` : NoImage} className='w-8 h-8 rounded-full object-cover' alt='Bot Icon' />
                  )}
                </div>
              ))}
            {!loading && finalChats?.length === 0 && (
              <div className='flex justify-center items-center h-full text-slate-400 font-semibold text-lg gap-3'>
                <img src={Edit} alt='Edit Icon' />
                Start a New Chat
              </div>
            )}
          </div>
          <div className=' w-full sticky bottom-0  xl:py-3 lg:py-0 xs:py-2 lg:px-5 xs:px-2 bg-slate-100 dark:bg-black'>
            <form
              onSubmit={(e: React.FormEvent) => {
                e.preventDefault()
                const formData = new FormData()
                formData.set("user_id", currentUser?.uid)
                formData.set("for_pro", "1")
                formData.set("id", state?.businessId ?? 0)
                create(formData)
                handleSendMessage()
              }}
            >
              <div className='mt-4 flex xs:gap-1 md:gap-4 items-center'>
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
                  placeholder='Type message...'
                />
                {isSmallScreen ? (
                  <div className='flex items-center gap-4'>
                    <div className='relative'>
                      <Button buttonClassName='!border-none' variant='ghost' onClick={handleDropdownClick}>
                        <VerticalDots color={theme === "dark" ? "white" : "#1A1B1C"} />
                      </Button>
                      {showDropdown && (
                        <div className='absolute bg-slate-200 dark:bg-dimGray bottom-12 mt-2 w-max rounded-lg '>
                          <div className='flex flex-col p-2 gap-4'>
                            <div className='flex items-center gap-2'>
                              {theme === "light" && <div children={<Camera color='#1A1B1C' />} />}
                              {theme === "dark" && <div children={<Camera color='white' />} />}
                              <Heading variant='smallTitle' text={"Camera"} />
                            </div>
                            <div className='flex items-center gap-2'>
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
                              <Heading variant='smallTitle' text={"Upload Files"} />
                            </div>
                            <div className='flex items-center gap-2'>
                              {theme === "light" && <div children={<Emoji color='#1A1B1C' />} onClick={() => setShow(!show)} />}
                              {theme === "dark" && <div children={<Emoji color='white' />} onClick={() => setShow(!show)} />}
                              <Heading variant='smallTitle' text={"Emoji"} />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className='flex gap-4'>
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
                )}
                {show && (
                  <EmojiKyeboard
                    onChange={(emojiObject: EmojiClickData) => {
                      setUserInput(userInput + emojiObject.emoji)
                    }}
                  />
                )}

                <Button
                  centerClassName='flex justify-center items-center'
                  disabled={userInput.length === 0 || userInput === ""}
                  buttonClassName='ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 w-24 disabled:text-white mt-1.5 h-full'
                  type='submit'
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </HomeCard>
    </div>
  )
}

export default ChatItems
