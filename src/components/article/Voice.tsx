'use client'

import Image from 'next/image'
import { Header2Voice } from '../Header/Header'
import { useRouter } from 'next/navigation'

const Voice = () => {
  const nav = useRouter()

  return (
    <article className="container h-full bg-kakaoSky">
      <Header2Voice />
      <main>
        <section className="relative overflow-y-auto overflow-x-hidden h-[100vh] scrollbar-hide flex flex-col justify-center items-center">
          <div className="relative w-[200px] h-[200px] flex items-center justify-center">
            <div className="absolute w-full h-full rounded-full bg-[#DAFFE4] shadow-[0_0_100px_100px_rgba(0,255,127,0.8)]"></div>
            <div className="w-[200px] h-[200px] bg-[#DAFFE4] rounded-full"></div>
          </div>
          <div className="w-full">
            <button className="absolute bottom-[6rem] left-16">
              <Image
                src={'/images/speaker.png'}
                width={127}
                height={127}
                alt="speaker image"
              />
            </button>
            <div className="absolute bottom-0 left-[50%] translate-x-[-50%]">
              <Image
                src={'/images/rian.png'}
                width={127}
                height={127}
                alt="speaker image"
              />
            </div>
            <button
              onClick={() => nav.back()}
              className="absolute bottom-[6rem] right-16"
            >
              <Image
                src={'/images/fail.png'}
                width={127}
                height={127}
                alt="speaker image"
              />
            </button>
          </div>
        </section>
      </main>
    </article>
  )
}

export default Voice
