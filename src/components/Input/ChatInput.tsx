import { BookPlus, Smile, MessageCircle, Paperclip } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const ChatInput = ({
  onSend,
  isLoading,
}: {
  onSend: (message: string) => void
  isLoading: boolean
}) => {
  const nav = useRouter()
  const [message, setMessage] = useState('')
  const isSending = useRef(false)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const handleSend = () => {
    if (!message.trim() || isSending.current || isLoading) return

    isSending.current = true
    onSend(message)

    setTimeout(() => {
      setMessage('')
      isSending.current = false
    }, 100)
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [isLoading, onSend])

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white p-3 border-t flex h-full items-center flex-col gap-2">
      <button
        onClick={() => nav.push('/voice')}
        className="absolute top-[-25px] sm:top-[-40px] right-[5%]"
      >
        <Image
          src={'/images/speaker.png'}
          width={80}
          height={80}
          alt="음성인식 iamge"
          className="w-16 h-16 sm:w-20 sm:h-20"
        />
      </button>
      <textarea
        ref={textareaRef}
        className="flex-grow focus:outline-none focus:ring-2 focus:ring-kakaoYellow mx-4 my-2 sm:mx-8 sm:my-6 w-[calc(100%-2rem)] px-4 py-2 text-Mcloude font-[400]"
        placeholder={
          isLoading ? '잠시만 기다려주세요.' : `메시지를 입력하세요...`
        }
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
          }
        }}
        disabled={isLoading}
      />
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex justify-between w-[50%]">
          <button>
            <Smile size={36} color="gray" className="size-6 sm:size-9" />
          </button>
          <button>
            <BookPlus size={36} color="gray" className="size-6 sm:size-9" />
          </button>
          <button>
            <MessageCircle
              size={36}
              color="gray"
              className="size-6 sm:size-9"
            />
          </button>
          <button>
            <Paperclip size={36} color="gray" className="size-6 sm:size-9" />
          </button>
        </div>
        <button
          onClick={handleSend}
          className={`w-24 h-14 sm:w-32 sm:h-16 bg-kakaoYellow rounded-xl text-black text-3xl`}
          disabled={isLoading}
        >
          전송
        </button>
      </div>
    </div>
  )
}

export default ChatInput
