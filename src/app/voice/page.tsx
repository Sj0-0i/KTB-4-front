import Voice from '@/components/article/Voice'
import { cookies } from 'next/headers'

const voicePage = async () => {
  const cookie = await cookies()
  const user = cookie.get('user')?.value

  const userId = user && JSON.parse(user).id

  return <Voice userId={userId} />
}

export default voicePage
