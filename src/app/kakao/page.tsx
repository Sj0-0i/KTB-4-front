import Chat from '@/components/article/Chat'

const Kakao = async () => {
  const data = await fetchMessage()

  return <Chat data={data} />
}

const fetchMessage = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/chat/messages?session_id=test_session_id`,
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
