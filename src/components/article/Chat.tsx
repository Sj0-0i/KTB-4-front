'use client'

import { Header } from '@/components/Header/Header'
import ChatInput from '@/components/Input/ChatInput'
import { ChatMessage, ChatMessageLoading } from '@/components/chat/Chat'
import { useEffect, useRef, useState } from 'react'

const Chat = () => {
  const [messages, setMessages] = useState<
    { text: string; isMine?: boolean; isLoading?: boolean }[]
  >([{ text: '안녕하세요! 창수님!', isMine: false, isLoading: false }])

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
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: message }),
      })

      const data = await response.json()

      setMessages((prev) => {
        const lastMessage = prev[prev.length - 1]
        if (lastMessage.isLoading) {
          return [...prev.slice(0, -1), { text: data.text, isMine: false }]
        }
        return [...prev, { text: data.text, isMine: false }]
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
        <section className="pt-[116px] overflow-y-auto overflow-x-hidden h-[calc(100vh-230px)] scrollbar-hide">
          {messages.map((msg, idx) =>
            msg.isLoading ? (
              <ChatMessageLoading key={idx} />
            ) : (
              <ChatMessage key={idx} isMine={msg.isMine} text={msg.text} />
            ),
          )}
          <div ref={chatEndRef} />
        </section>
        <section className="fixed bottom-0 w-full left-[50%] md:w-[600px] bg-white h-[230px] translate-x-[-50%]">
          <ChatInput onSend={addMessage} isLoading={isLoading as boolean} />
        </section>
      </main>
    </article>
  )
}

export default Chat
