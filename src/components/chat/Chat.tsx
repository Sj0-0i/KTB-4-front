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
      className={`flex items-end ${isMine ? 'justify-end' : 'justify-start'} mb-10`}
    >
      {!isMine ? (
        <div className="flex gap-5 w-full">
          <Profile src={profileSrc} name={name} />
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">{name}</span>
            <Cloude text={text} />
          </div>
        </div>
      ) : (
        <Cloude text={text} isRight />
      )}
    </div>
  )
}

export default ChatMessage
