import { ArrowLeft, AlignJustify } from 'lucide-react'

export const Header = () => {
  return (
    <header className="header flex items-center justify-between py-4 px-2 bg-kakaoYellow">
      <ArrowLeft size={24} />
      <h1>Logan</h1>
      <AlignJustify size={24} />
    </header>
  )
}
