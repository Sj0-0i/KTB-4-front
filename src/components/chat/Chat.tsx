import React from 'react'
import Profile from '../profile/Profile'
import Cloude from '../cloude/Cloude'

interface ChatMessageProps {
  text: string
  isMine?: boolean
  profileSrc?: string
  name?: string
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  text,
  isMine = false,
  profileSrc,
  name,
}) => {
  return (
    <div
      className={`flex items-end ${isMine ? 'justify-end' : 'justify-start'} my-2`}
    >
      {!isMine ? (
        <div className="flex gap-5 w-[80%]">
          <Profile src={profileSrc} name={name} />
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">{name}</span>
            <Cloude text={text} />
          </div>
        </div>
      ) : (
        <div className="flex w-[80%]">
          <Cloude text={text} isRight />
        </div>
      )}
    </div>
  )
}

export default ChatMessage
