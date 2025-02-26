'use client'

import { useState } from 'react'
import ChatMessage from '../chat/Chat'
import { Header2Before } from '../Header/Header'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

const Init = () => {
  const nav = useRouter()

  const [age, setAge] = useState<number | null>(null)
  const [like, setLike] = useState<string | null>(null)

  const submit = () => {
    if (age && like) {
      const randomId = crypto.randomUUID()
      const user = { id: randomId, age, like }

      Cookies.set('user', JSON.stringify(user), { expires: 1 / 24 })

      console.log('쿠키 저장 완료')

      nav.push('/kakao')
    }
  }

  return (
    <article
      className="container min-h-full scrollbar-hide"
      style={{
        background:
          'linear-gradient(to right bottom, #85DFBF 70%, #FDAFD8 100%)',
      }}
    >
      <Header2Before />
      <main>
        <section className="pt-[116px] overflow-y-auto overflow-x-hidden h-full] scrollbar-hide">
          <ChatMessage
            className="animate-fade-in"
            text={`logan님, 안녕하세요?:) \n logan님이 좋아하시는걸 조금 물어볼게요!`}
          />
          <ChatMessage
            text={'아래 중 본인의 연령대를 선택해주세요! :)'}
            className="animate-fade-in"
          />
          <div className="grid grid-cols-2 gap-4 my-4 w-fit mx-auto animate-fade-in">
            <button
              onClick={() => setAge(70)}
              className={`btn w-[150px] h-[150px] rounded-[42px] text-Mcloude text-[32px] ${age === 70 ? 'shadow-2xl bg-kakaoYellow' : 'bg-[#FFFAD1]'}`}
            >
              70대
            </button>
            <button
              onClick={() => setAge(80)}
              className={`btn w-[150px] h-[150px] rounded-[42px] text-Mcloude text-[32px] ${age === 80 ? 'shadow-2xl bg-kakaoYellow' : 'bg-[#FFFAD1]'}`}
            >
              80대
            </button>
            <button
              onClick={() => setAge(90)}
              className={`btn w-[150px] h-[150px] rounded-[42px] text-Mcloude text-[32px] ${age === 90 ? 'shadow-2xl bg-kakaoYellow' : 'bg-[#FFFAD1]'}`}
            >
              90대
            </button>
            <button
              onClick={() => setAge(100)}
              className={`btn w-[150px] h-[150px] rounded-[42px] text-Mcloude text-[32px] whitespace-pre-line ${age === 100 ? 'shadow-2xl bg-kakaoYellow' : 'bg-[#FFFAD1]'}`}
            >
              100대
            </button>
          </div>
          {age && (
            <div className="animate-fade-in">
              <ChatMessage
                text={'아래 중 좋아하시는 관심사 두개만 선택해주세요! :)'}
              />
              <div className="grid grid-cols-2 gap-4 mt-4 my-12 w-fit mx-auto">
                <button
                  onClick={() => setLike('health')}
                  className={`btn w-[150px] h-[150px] rounded-[42px] text-Mcloude text-[32px] ${like === 'health' ? 'shadow-2xl bg-kakaoYellow' : 'bg-[#FFFAD1]'}`}
                >
                  건강
                </button>
                <button
                  onClick={() => setLike('financial')}
                  className={`btn w-[150px] h-[150px] rounded-[42px] text-Mcloude text-[32px] ${like === 'financial' ? 'shadow-2xl bg-kakaoYellow' : 'bg-[#FFFAD1]'}`}
                >
                  경제
                </button>
                <button
                  onClick={() => setLike('law')}
                  className={`btn w-[150px] h-[150px] rounded-[42px] text-Mcloude text-[32px] ${like === 'law' ? 'shadow-2xl bg-kakaoYellow' : 'bg-[#FFFAD1]'}`}
                >
                  법률
                </button>
                <button
                  onClick={() => setLike('family')}
                  className={`btn w-[150px] h-[150px] rounded-[42px] text-Mcloude text-[32px] whitespace-pre-line ${like === 'family' ? 'shadow-2xl bg-kakaoYellow' : 'bg-[#FFFAD1]'}`}
                >
                  가족
                </button>
              </div>
            </div>
          )}
          {age && like && (
            <div className="flex justify-end animate-fade-in">
              <button
                onClick={submit}
                className="w-[150px] h-[70px] rounded-[10px] text-Mcloude mb-4 text-[32px] bg-kakaoYellow"
              >
                확인
              </button>
            </div>
          )}
        </section>
      </main>
    </article>
  )
}
export default Init
