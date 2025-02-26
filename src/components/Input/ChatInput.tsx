import { BookPlus, Smile, MessageCircle, Paperclip } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const ChatInput = ({ onSend }: { onSend: (message: string) => void }) => {
  const nav = useRouter()
  const [message, setMessage] = useState('')

  const handleSend = () => {
    if (!message.trim()) return
    onSend(message)
    setMessage('')
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white p-3 border-t flex h-full items-center flex-col gap-2">
      <button
        onClick={() => nav.push('/voice')}
        className="absolute top-[-40px] right-[5%]"
      >
        <Image
          src={'/images/speaker.png'}
          width={80}
          height={80}
          alt="음성인식 iamge"
        />
      </button>
      <textarea
        className="flex-grow focus:outline-none focus:ring-2 focus:ring-kakaoYellow mx-8a my-6 w-[calc(100%-2rem)] px-4 py-2 text-Mcloude font-[400]"
        placeholder="메시지를 입력하세요..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
          }
        }}
      />
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex justify-between w-[50%]">
          <button>
            <Smile size={36} color="gray" />
          </button>
          <button>
            <BookPlus size={36} color="gray" />
          </button>
          <button>
            <MessageCircle size={36} color="gray" />
          </button>
          <button>
            <Paperclip size={36} color="gray" />
          </button>
        </div>
        <button
          onClick={handleSend}
          className="w-32 h-16 rounded-xl bg-kakaoYellow text-black text-3xl"
        >
          전송
        </button>
      </div>
    </div>
  )
}

export default ChatInput
