import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex w-screen justify-center h-10 align-middle bg-cyan-500'>
        <ul className='flex gap-3 h-full items-center'>
            <li>
                <Link href={'/'} className='text-white text-decoration-line: none; h-min'>home</Link>
            </li>
            <li>
            <Link href={'about'} className='text-white text-decoration-line: none; h-min'>about</Link>
            </li>
            <li>
                <Link href={'/posts'} className='text-white text-decoration-line: none; h-min'>posts</Link>
            </li>
            <li>
              <Link href={'/admin'} className='text-white text-decoration-line: none; h-min'>admin</Link>
            </li>
            <li>
              <Link href={'/login'} className='text-white text-decoration-line: none; h-min'>auth</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar