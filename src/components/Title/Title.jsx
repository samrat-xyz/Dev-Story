import React from 'react'

function Title({children}) {
  return (
    <div className='px-6 py-3'>
      <h1 className='text-4xl font-bold uppercase'>{children}</h1>
    </div>
  )
}

export default Title
