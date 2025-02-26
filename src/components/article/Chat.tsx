'use client'

import { Header } from '@/components/Header/Header'
import ChatInput from '@/components/Input/ChatInput'
import ChatMessage from '@/components/chat/Chat'

const Chat = () => {
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
          <ChatMessage text={`창수님, 안녕하세요?:)`} />
          <ChatMessage text="어제 알려준 곳 주소?" isMine />
          <ChatMessage text="어제는 '신발원' 만두집을 추천해 드렸어요. 주소는 '부산 광역시 동구 대영로 243번길 64 지번'이에요." />
          <ChatMessage text="어제는 '신발원' 만두집을 추천해 드렸어요. 주소는 '부산 광역시 동구 대영로 243번길 64 지번'이에요." />
          <ChatMessage text="어제는 '신발원' 만두집을 추천해 드렸어요. 주소는 '부산 광역시 동구 대영로 243번길 64 지번'이에요." />
        </section>
        <section className="fixed bottom-0 w-full left-[50%] md:w-[600px] bg-white h-[230px] translate-x-[-50%]">
          <ChatInput onSend={(message) => console.log(message)} />
        </section>
      </main>
    </article>
  )
}

export default Chat
