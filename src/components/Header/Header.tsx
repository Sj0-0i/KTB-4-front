import Image from 'next/image'

export const Header = () => {
  return (
    <header className="fixed sm:w-[100%] left-[50%] md:w-[540px] translate-x-[-50%] center lg:w-[600px] right-0 top-0 w-full flex items-center justify-between py-4 px-9 z-30 bg-kakaoSky">
      <Image
        src={'/images/logo.png'}
        width={195}
        height={87}
        alt="logo image"
      />
      <div className="relative w-14 h-14">
        <Image src={'/images/tap.png'} fill alt="logo image" />
      </div>
    </header>
  )
}
