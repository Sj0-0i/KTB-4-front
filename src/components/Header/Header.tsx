import { ChevronLeft, AlignJustify } from 'lucide-react'

export const Header = () => {
  return (
    <header className="fixed sm:w-[100%] left-[50%] md:w-[540px] translate-x-[-50%] center lg:w-[600px] right-0 top-0 w-full flex items-center justify-between py-4 px-2 z-30 backdrop-blur-md">
      <ChevronLeft size={32} />
      <h1 className="text-h4">Logan</h1>
      <AlignJustify size={32} />
    </header>
  )
}
