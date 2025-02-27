'use client'

import Image from 'next/image'
import { Header2Voice } from '../Header/Header'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useRecorder } from '@/hook/useRecorder/useRecoder'

const Voice = ({ userId }: { userId: string }) => {
  const nav = useRouter()
  const { recording, transcription, startRecording, stopRecording } =
    useRecorder()
  const [isAnimating, setIsAnimating] = useState(false)
  const [finish, setFinish] = useState(false)
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    if (transcription) {
      sendTranscriptionToServer(transcription)
    }
  }, [transcription])

  const handleRecord = () => {
    if (recording) {
      stopRecording()
      setIsAnimating(false)
    } else {
      setFinish(false)
      setDisplayText('')
      startRecording()
      setIsAnimating(true)
    }
  }

  const sendTranscriptionToServer = async (message: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/chat`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message, userId }),
        },
      )

      if (!response.ok) {
        throw new Error('서버 응답 오류')
      }

      const data = await response.json()

      setDisplayText(data.content)
      setFinish(true)
    } catch (error) {
      console.error('API 요청 실패:', error)
    }
  }

  return (
    <article className="container h-full bg-kakaoSky">
      <Header2Voice />
      <main>
        <section className="relative overflow-y-auto overflow-x-hidden h-[100vh] scrollbar-hide flex flex-col justify-center items-center">
          {!displayText ? (
            <div className="relative w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] flex items-center justify-center">
              <div
                className={`absolute w-full h-full rounded-full bg-[#DAFFE4] shadow-[0_0_50px_50px_rgba(0,255,127,0.8)] sm:shadow-[0_0_100px_100px_rgba(0,255,127,0.8)]
                ${isAnimating ? 'animate-ping' : ''}`}
              />
              <div className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] bg-[#DAFFE4] rounded-full"></div>
            </div>
          ) : (
            <p className="animate-fade-in text-Mcloude text-center">
              {displayText}
            </p>
          )}
          <div className="w-full">
            <button
              onClick={handleRecord}
              className="absolute bottom-[6rem] sm:left-16"
            >
              <Image
                src={'/images/speaker.png'}
                width={127}
                height={127}
                alt="speaker image"
                className="w-20 h-20 sm:w-32 sm:h-32"
              />
            </button>
            {isAnimating && (
              <div className="absolute bottom-[230px] animate-fade-in left-[50%] translate-x-[-50%] text-Mcloude font-[500]">
                &quot;말씀해 주세요&quot;
              </div>
            )}
            {!isAnimating && !finish && recording && (
              <div className="absolute text-center bottom-[230px] animate-fade-in left-[50%] translate-x-[-50%] text-Mcloude font-[500]">
                &quot;답변을 생성하고 있습니다. 잠시만 기다려주세요.&quot;
              </div>
            )}
            {!isAnimating && finish && displayText && (
              <div className="absolute text-center bottom-[230px] animate-fade-in left-[50%] translate-x-[-50%] text-Mcloude text-[1.5rem] font-[500]">
                &quot;다시 듣고싶으시면 라이언을 클릭해주세요!&quot;
              </div>
            )}

            <button className="absolute bottom-0 left-[50%] translate-x-[-50%]">
              <Image
                src={'/images/rian.png'}
                width={127}
                height={127}
                alt="speaker image"
                className="w-24 h-24 sm:w-32 sm:h-32"
              />
            </button>
            <button
              onClick={() => nav.push('/kakao')}
              className="absolute bottom-[6rem] right-0 sm:right-16"
            >
              <Image
                src={'/images/fail.png'}
                width={127}
                height={127}
                alt="cancel button"
                className="w-20 h-20 sm:w-32 sm:h-32"
              />
            </button>
          </div>
        </section>
      </main>
    </article>
  )
}

export default Voice
