import Chat from '@/components/article/Chat'
import { cookies } from 'next/headers'

const Kakao = async () => {
  const cookie = await cookies()
  const userId = cookie.get('user')?.value

  const data = await fetchMessage(userId as string)

  return <Chat data={data} />
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
    console.log(res.body)

    return res.json()
  } catch (error) {
    console.error('메시지 로드 실패:', error)
    return []
  }
}

export default Kakao
