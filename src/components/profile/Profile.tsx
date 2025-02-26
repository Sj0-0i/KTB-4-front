import Image from 'next/image'
import React from 'react'

interface KakaoProfileProps {
  src?: string
  name?: string
}

const Profile: React.FC<KakaoProfileProps> = ({ src }) => {
  return (
    <div className="w-10 h-10 flex-shrink-0 relative rounded-[36px] flex items-center justify-center bg-gray-300 text-white font-bold text-lg overflow-hidden my-2">
      <Image
        src={src ?? '/images/profile.png'}
        alt="User Profile"
        className="w-full h-full object-cover"
        fill
      />
    </div>
  )
}

export default Profile
