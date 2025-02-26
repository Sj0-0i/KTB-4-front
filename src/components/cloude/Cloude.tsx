import React from 'react'
import { useState, useEffect } from 'react'

interface KakaoBubbleProps {
  text: string
  isRight?: boolean
}

export const Cloude: React.FC<KakaoBubbleProps> = ({
  text,
  isRight = false,
}) => {
  return (
    <div
      className={`flex ${isRight ? 'justify-end' : 'justify-start'} my-2 text-Mcloude`}
    >
      <div className="flex flex-col gap-1">
        <span className="text-body">KAKAO GPT</span>
        <div
          className={`relative ${isRight ? 'bg-kakaoYellow' : 'bg-white'} text-black rounded-[10px] px-4 py-2 shadow-md`}
        >
          <div
            className={`absolute ${isRight ? 'right-[-14px] rotate-45 border-l-[24px] border-kakaoYellow' : 'left-[-14px] rotate-45 border-r-[24px] border-white'} top-0  w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent`}
          />
          {text}
        </div>
      </div>
    </div>
  )
}
export const CloudeLoading: React.FC = () => {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : ''))
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex justify-start my-2 text-Mcloude">
      <div className="flex flex-col gap-1">
        <span className="text-body">KAKAO GPT</span>
        <div className="relative bg-white text-black rounded-[10px] px-4 py-2 shadow-md w-[230px]">
          <div className="absolute left-[-14px] rotate-45 border-r-[24px] border-white top-0 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent" />
          {`답변을 생성중 입니다${dots || '.'}`}
        </div>
      </div>
    </div>
  )
}
