import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
<div className="h-dvh flex flex-row justify-end bg-fixed bg-[url('/megaaa.jpg')]">
    <SignIn/>
  </div>
  )
}