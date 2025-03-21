'use client'

import { Header } from '@/components/Header/Header'
import ChatInput from '@/components/Input/ChatInput'
import { ChatMessage, ChatMessageLoading } from '@/components/chat/Chat'
import { useEffect, useRef, useState } from 'react'

interface Message {
  id: string
  session_id: string
  type: string
  content: string
}
interface ChatProps {
  data: {
    messages: Message[]
  }
  userId: string
}

const Chat = ({ data, userId }: ChatProps) => {
  console.log(userId)

  const [messages, setMessages] = useState<
    { text: string; isMine?: boolean; isLoading?: boolean }[]
  >([
    { text: '편하게 질문해주세요 :)', isMine: false },
    ...data.messages.map((msg) => ({
      text: msg.content,
      isMine: msg.type === 'human',
    })),
  ])

  const isLoading =
    messages.length > 0 && messages[messages.length - 1].isLoading
  const chatEndRef = useRef<HTMLDivElement | null>(null)

  const addMessage = async (message: string) => {
    if (isLoading) return

    setMessages((prev) => [
      ...prev,
      { text: message, isMine: true },
      { text: '', isLoading: true },
    ])

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/chat`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: message, userId: userId }),
        },
      )

      const data = await response.json()

      setMessages((prev) => {
        const lastMessage = prev[prev.length - 1]
        if (lastMessage.isLoading) {
          return [...prev.slice(0, -1), { text: data.content, isMine: false }]
        }
        return [...prev, { text: data.content, isMine: false }]
      })
    } catch (error) {
      console.error('API 요청 실패:', error)
      setMessages((prev) => [...prev.slice(0, -1)])
    }
  }

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <article
      className="container h-full"
      style={{
        background:
          'linear-gradient(to right bottom, #83C1F8 70%, #7EFFA3 100%)',
      }}
    >
      <Header />
      <main>
        <section className="pt-[116px] overflow-y-auto overflow-x-hidden h-[calc(100vh-150px)] sm:h-[calc(100vh-230px)] pb-[40px] scrollbar-hide">
          {messages.map((msg, idx) =>
            msg.isLoading ? (
              <ChatMessageLoading key={idx} />
            ) : (
              <ChatMessage key={idx} isMine={msg.isMine} text={msg.text} />
            ),
          )}
          <div ref={chatEndRef} />
        </section>
        <section className="fixed bottom-0 w-full left-[50%] md:w-[600px] bg-white h-[150px] sm:h-[230px] translate-x-[-50%]">
          <ChatInput onSend={addMessage} isLoading={isLoading as boolean} />
        </section>
      </main>
    </article>
  )
}

export default Chat
