'use client'

import { useState, useEffect } from 'react'
import Chat from '@/components/article/Chat'

type Message = {
  id: string
  session_id: string
  type: string
  content: string
}

const Kakao = () => {
  const [userId, setUserId] = useState<string | null>(null)
  const [data, setData] = useState<{ messages: Message[] }>({ messages: [] })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const getUserIdFromCookie = () => {
      const cookies = document.cookie.split('; ')
      const userCookie = cookies.find((row) => row.startsWith('user='))
      if (userCookie) {
        try {
          return JSON.parse(decodeURIComponent(userCookie.split('=')[1])).id
        } catch (error) {
          console.error('쿠키 파싱 실패:', error)
        }
      }
      return null
    }

    setUserId(getUserIdFromCookie())
  }, [])

  useEffect(() => {
    if (!userId) return

    const fetchMessage = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/chat/messages?session_id=${userId}`,
          { cache: 'no-store' },
        )
        if (!res.ok) throw new Error('서버 상태 이상')

        const jsonData: Message[] = await res.json()
        setData({ messages: jsonData }) // ✅ 객체 형태로 변환
      } catch (error) {
        console.error('메시지 로드 실패:', error)
      }
    }

    fetchMessage()
  }, [userId])

  return <Chat data={data} userId={userId || ''} />
}

export default Kakao
