import Image from 'next/image'
import React from 'react'

interface KakaoProfileProps {
  src?: string
  name?: string
}

const Profile: React.FC<KakaoProfileProps> = ({ src }) => {
  return (
    <div className="w-6 h-6 md:w-10 md:h-10 flex-shrink-0 relative flex items-center justify-center rounded-full bg-gray-300 text-white font-bold text-lg overflow-hidden my-2">
      <Image
        src={src ?? '/images/profile.jpg'}
        alt="User Profile"
        className="w-full h-full object-cover"
        fill
      />
    </div>
  )
}

export default Profile
