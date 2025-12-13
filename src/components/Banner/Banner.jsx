"use client"
import React from 'react'
import Title from '../Title/Title'
import { useRouter } from 'next/navigation'

function Banner() {
    const router = useRouter()
    const handleBtn = () =>{
       const password = prompt('Enter Password');
       if(password == '123'){
            router.push('/dashboard')
       }
    }
  return (
    <div className='border py-28 bg-linear-60 bg-sky-500 flex flex-col items-center space-y-6'>
      <Title>Hello,Welcome To Dev Story</Title>
      <button
      onClick={handleBtn}
      className='px-6 py-3 border bg-black text-white rounded-xl hover:bg-gray-600 duration-200 cursor-pointer'>Share Story</button>
    </div>
  )
}

export default Banner
