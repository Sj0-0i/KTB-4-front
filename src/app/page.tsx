'use client'

import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Init from '@/components/article/Init'
import Chat from '@/components/article/Chat'

const Home = () => {
  const [user, setUser] = useState<string | null | undefined>(undefined)

  useEffect(() => {
    const userCookie = Cookies.get('user')
    setUser(userCookie || null)
  }, [])

  if (user === undefined) {
    return null
  }

  return user ? <Chat /> : <Init />
}

export default Home
