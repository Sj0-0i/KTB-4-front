import React from 'react'

interface KakaoBubbleProps {
  text: string
  isRight?: boolean
}

const Cloude: React.FC<KakaoBubbleProps> = ({ text, isRight = false }) => {
  return (
    <div
      className={`flex ${isRight ? 'justify-end' : 'justify-start'} my-2 text-p`}
    >
      <div
        className={`relative max-w- ${isRight ? 'bg-kakaoYellow' : 'bg-white'} text-black rounded-xl px-4 py-2 shadow-md`}
      >
        {/* 꼬리 */}
        <div
          className={`absolute ${isRight ? 'right-[-12px] border-l-[16px] border-kakaoYellow' : 'left-[-12px] border-r-[16px] border-white'} top-2  w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent`}
        />
        {text}
      </div>
    </div>
  )
}

export default Cloude
