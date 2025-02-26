'use client'

import { Header } from '@/components/header/Header'
import ChatMessage from '@/components/chat/Chat'

const Home = () => {
  return (
    <article className="container animate-fade-in h-full bg-kakaoSky">
      <Header />
      <section className="pt-[64px]">
        <ChatMessage text="안녕하세요" />
        <ChatMessage
          text="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
          isMine
        />
        <ChatMessage text="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요" />
      </section>
    </article>
  )
}

export default Home
