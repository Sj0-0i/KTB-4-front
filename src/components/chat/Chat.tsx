import Profile from '../profile/Profile'
import { Cloude, CloudeLoading } from '../cloude/Cloude'

interface ChatMessageProps {
  text: string
  isMine?: boolean
  className?: string
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  text,
  isMine = false,
  className,
}) => {
  return (
    <div
      className={`animate-fade-in flex items-end ${isMine ? 'justify-end' : 'justify-start'} mb-5 ${className}`}
    >
      {!isMine ? (
        <div className="flex gap-5 w-full">
          <Profile />
          <div className="flex flex-col">
            <Cloude text={text} />
          </div>
        </div>
      ) : (
        <Cloude text={text} isRight />
      )}
    </div>
  )
}

export const ChatMessageLoading: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div
      className={`animate-fade-in flex items-end 'justify-startmb-5 ${className}`}
    >
      <div className="flex gap-5 w-full">
        <Profile />
        <div className="flex flex-col">
          <CloudeLoading />
        </div>
      </div>
    </div>
  )
}
