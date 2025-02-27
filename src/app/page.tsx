'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Home = () => {
  const nav = useRouter()

  useEffect(() => {
    nav.push('/kakao')
  }, [nav])

  return null
}

export default Home
