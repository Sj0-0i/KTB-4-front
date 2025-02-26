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
          {/* 녹음 시 애니메이션 효과 */}
          <div className="relative w-[200px] h-[200px] flex items-center justify-center">
            <div
              className={`absolute w-full h-full rounded-full bg-[#DAFFE4] shadow-[0_0_100px_100px_rgba(0,255,127,0.8)]
                ${isAnimating ? 'animate-ping' : ''}`}
            />
            <div className="w-[200px] h-[200px] bg-[#DAFFE4] rounded-full"></div>
          </div>

          {/* 변환된 텍스트 표시 */}
          {transcription && (
            <div className="absolute top-20 bg-white p-4 rounded-lg shadow-md text-lg text-center max-w-[80%]">
              {transcription}
            </div>
          )}

          <div className="w-full">
            {/* 음성 녹음 버튼 */}
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

            {/* 캐릭터 이미지 */}
            <div className="absolute bottom-0 left-[50%] translate-x-[-50%]">
              <Image
                src={'/images/rian.png'}
                width={127}
                height={127}
                alt="speaker image"
              />
            </div>

            {/* 취소 버튼 */}
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
