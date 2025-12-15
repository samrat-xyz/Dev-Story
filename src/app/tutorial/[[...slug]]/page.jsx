import Title from '@/components/Title/Title'
import React from 'react'

async function Tutorial({params}) {
    const {slug} = await params
    // console.log(slug)
    const [technology,topic,page_no] = slug || [];
    console.log(slug)
  return (
    <div>
      <Title>Tutorial page</Title>
      <h1> {technology}</h1>
      <h1>{topic}</h1>
      <h3>{page_no}</h3>
    </div>
  )
}

export default Tutorial
