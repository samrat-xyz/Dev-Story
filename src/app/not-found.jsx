import Link from 'next/link'
import React from 'react'

function NotFound404() {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h1 className='text-8xl font-semibold'>404</h1>
      <Link className='mt-8 text-xl font-semibold px-8 py-3 border' href='/'>Go Home</Link>

    </div>
  )
}

export default NotFound404
