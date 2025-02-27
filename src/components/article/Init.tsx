'use client'

import { useEffect, useRef, useState } from 'react'
import { ChatMessage } from '../chat/Chat'
import { Header2Before } from '../Header/Header'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

const Init = () => {
  const nav = useRouter()
  const [age, setAge] = useState<number | null>(null)
  const [like, setLike] = useState<string[]>([])
  const initEnd = useRef<HTMLDivElement | null>(null)

  const handleLikeClick = (interest: string) => {
    if (like.includes(interest)) {
      setLike(like.filter((item) => item !== interest))
    } else if (like.length < 2) {
      setLike([...like, interest])
    }
  }
  const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = crypto.getRandomValues(new Uint8Array(1))[0] % 16 | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  const submit = () => {
    if (age && like.length === 2) {
      const randomId = generateUUID()
      const user = { id: randomId, age, like }

      Cookies.set('user', JSON.stringify(user), { expires: 1 / 24 })
      console.log('쿠키 저장 완료')
      nav.push('/kakao')
    }
  }

  useEffect(() => {
    initEnd.current?.scrollIntoView({ behavior: 'smooth' })
  }, [age, like])

  return (
    <article
      className="container h-full"
      style={{
        background:
          'linear-gradient(to right bottom, #85DFBF 70%, #FDAFD8 100%)',
      }}
    >
      <Header2Before />
      <main>
        <section className="pt-[116px] overflow-y-auto overflow-x-hidden scrollbar-hide h-[100dvh]">
          <ChatMessage
            className="animate-fade-in"
            text={`logan님, 안녕하세요?:) \n logan님이 좋아하시는걸 조금 물어볼게요!`}
          />
          <ChatMessage
            text={'아래 중 본인의 연령대를 선택해주세요! :)'}
            className="animate-fade-in"
          />
          <div className="grid grid-cols-2 gap-4 my-4 w-fit mx-auto animate-fade-in">
            {[70, 80, 90, 100].map((num) => (
              <button
                key={num}
                onClick={() => setAge(num)}
                className={`btn w-[150px] h-[150px] rounded-[42px] text-Mcloude text-[32px] ${
                  age === num ? 'shadow-2xl bg-kakaoYellow' : 'bg-[#FFFAD1]'
                }`}
              >
                {num}대
              </button>
            ))}
          </div>

          {age && (
            <div className="animate-fade-in">
              <ChatMessage
                text={'아래 중 좋아하시는 관심사 두 개만 선택해주세요! :)'}
              />
              <div className="grid grid-cols-2 gap-4 mt-4 my-12 w-fit mx-auto">
                {['health', 'financial', 'law', 'family'].map((interest) => (
                  <button
                    key={interest}
                    onClick={() => handleLikeClick(interest)}
                    className={`btn w-[150px] h-[150px] rounded-[42px] text-Mcloude text-[32px] ${
                      like.includes(interest)
                        ? 'shadow-2xl bg-kakaoYellow'
                        : 'bg-[#FFFAD1]'
                    }`}
                  >
                    {interest === 'health'
                      ? '건강'
                      : interest === 'financial'
                        ? '경제'
                        : interest === 'law'
                          ? '법률'
                          : '가족'}
                  </button>
                ))}
              </div>
            </div>
          )}

          {age && like.length === 2 && (
            <div className="flex justify-end animate-fade-in">
              <button
                onClick={submit}
                className="w-[150px] h-[70px] rounded-[10px] text-Mcloude mb-4 text-[32px] bg-kakaoYellow"
              >
                확인
              </button>
            </div>
          )}
          <div ref={initEnd} />
        </section>
      </main>
    </article>
  )
}

export default Init
