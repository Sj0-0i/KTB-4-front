import Image from 'next/image'
import { X } from 'lucide-react'

export const Header = () => {
  return (
    <header className="fixed sm:w-[100%] left-[50%] md:w-[540px] translate-x-[-50%] center lg:w-[600px] right-0 top-0 w-full flex items-center justify-between py-4 px-9 z-30 bg-kakaoSky">
      <div className="relative sm:w-[195px] sm:h-[87px] w-[102px] h-[43px]">
        <Image
          src={'/images/logo.png'}
          width={195}
          height={87}
          alt="logo image"
        />
      </div>
      <button className="relative w-7 h-7  sm:w-14 sm:h-14">
        <Image src={'/images/tap.png'} fill alt="logo image" />
      </button>
    </header>
  )
}

export const Header2Before = () => {
  return (
    <header className="fixed sm:w-[100%] left-[50%] md:w-[540px] translate-x-[-50%] center lg:w-[600px] right-0 top-0 w-full flex items-center justify-between py-4 px-9 z-30 bg-[#85DFBF]">
      <div className="relative sm:w-[195px] sm:h-[87px] w-[102px] h-[43px]">
        <Image
          src={'/images/logo.png'}
          width={195}
          height={87}
          alt="logo image"
        />
      </div>
      <X size={56} color="gray" />
    </header>
  )
}

export const Header2Voice = () => {
  return (
    <header className="fixed sm:w-[100%] left-[50%] md:w-[540px] translate-x-[-50%] center lg:w-[600px] right-0 top-0 w-full flex items-center justify-between py-4 px-9 z-30 bg-kakaoSky">
      <div className="relative sm:w-[195px] sm:h-[87px] w-[102px] h-[43px]">
        <Image
          src={'/images/logo.png'}
          width={195}
          height={87}
          alt="logo image"
        />
      </div>
      <X size={56} color="gray hidden" />
    </header>
  )
}
