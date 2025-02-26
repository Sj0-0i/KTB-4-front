import { Send, Smile } from 'lucide-react'
import { useState } from 'react'

const ChatInput = ({ onSend }: { onSend: (message: string) => void }) => {
  const [message, setMessage] = useState('')

  const handleSend = () => {
    if (!message.trim()) return
    onSend(message)
    setMessage('') // 입력창 초기화
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white p-3 border-t flex items-center gap-2">
      {/* 이모티콘 버튼 */}
      <button className="p-2 text-gray-500">
        <Smile size={24} />
      </button>

      {/* 입력 필드 */}
      <input
        type="text"
        className="flex-grow px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-kakaoYellow"
        placeholder="메시지를 입력하세요..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
      />

      {/* 전송 버튼 */}
      <button
        onClick={handleSend}
        className="p-2 text-kakaoYellow disabled:opacity-50"
        disabled={!message.trim()}
      >
        <Send size={24} />
      </button>
    </div>
  )
}

export default ChatInput
