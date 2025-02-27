import Chat from '@/components/article/Chat'
import { cookies } from 'next/headers'

const Kakao = async () => {
  const cookie = await cookies()
  const user = cookie.get('user')?.value

  const userId = user && JSON.parse(user).id

  const data = await fetchMessage(userId)

  return <Chat data={data} userId={userId} />
}

const fetchMessage = async (userId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/chat/messages?session_id=${userId}`,
      {
        cache: 'no-store',
      },
    )
    if (!res.ok) {
      throw new Error('서버 상태 이상')
    }
    return res.json()
  } catch (error) {
    console.error('메시지 로드 실패:', error)
    return []
  }
}

export default Kakao
