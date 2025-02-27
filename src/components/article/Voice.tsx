'use client'

import Image from 'next/image'
import { Header2Voice } from '../Header/Header'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useRecorder } from '@/hook/useRecorder/useRecoder'

const Voice = () => {
  const nav = useRouter()
  const { recording, transcription, startRecording, stopRecording } =
    useRecorder()
  const [isAnimating, setIsAnimating] = useState(false)
  const [finish, setFinish] = useState(false)

  const handleRecord = () => {
    if (recording) {
      stopRecording()
      setIsAnimating(false)
    } else {
      startRecording()
      setIsAnimating(true)
    }
  }

  return (
    <article className="container h-full bg-kakaoSky">
      <Header2Voice />
      <main>
        <section className="relative overflow-y-auto overflow-x-hidden h-[100vh] scrollbar-hide flex flex-col justify-center items-center">
          <div className="relative w-[200px] h-[200px] flex items-center justify-center">
            <div
              className={`absolute w-full h-full rounded-full bg-[#DAFFE4] shadow-[0_0_100px_100px_rgba(0,255,127,0.8)]
                ${isAnimating ? 'animate-ping' : ''}`}
            />
            <div className="w-[200px] h-[200px] bg-[#DAFFE4] rounded-full"></div>
          </div>
          <div className="w-full">
            <button
              onClick={handleRecord}
              className="absolute bottom-[6rem] left-16"
            >
              <Image
                src={'/images/speaker.png'}
                width={127}
                height={127}
                alt="speaker image"
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
            <div className="absolute bottom-0 left-[50%] translate-x-[-50%]">
              <Image
                src={'/images/rian.png'}
                width={127}
                height={127}
                alt="speaker image"
              />
            </div>
            <button
              onClick={() => nav.back()}
              className="absolute bottom-[6rem] right-16"
            >
              <Image
                src={'/images/fail.png'}
                width={127}
                height={127}
                alt="cancel button"
              />
            </button>
          </div>
        </section>
      </main>
    </article>
  )
}

export default Voice
