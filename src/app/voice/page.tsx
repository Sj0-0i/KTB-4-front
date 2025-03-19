'use client'

import { useState, useEffect } from 'react'
import Voice from '@/components/article/Voice'

const VoicePage = () => {
  const [userId, setUserId] = useState<string | null>(null)

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

  return <Voice userId={userId ?? ''} /> // ✅ null이 오면 빈 문자열로 변환
}

export default VoicePage
