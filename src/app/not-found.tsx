import Link from 'next/link'
import { headers } from 'next/headers'
 
export default async function NotFound() {
  const headersList = await headers()
  const domain = headersList.get('host')
  return (
    <div className='h-full w-full flex flex-col items-center justify-center gap-10'>
      <h2 className= 'text-red-600 text-9xl'>404 Not Found!</h2>
      <p className='text-5xl'>Page Not Found</p>
        <Link href="/" className='border-none px-8 py-3 bg-red-600 text-white'>return home!</Link>
    </div>
  )
}