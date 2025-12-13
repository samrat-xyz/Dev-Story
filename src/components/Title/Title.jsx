import React from 'react'

function Title({children}) {
  return (
    <div>
      <h1 className='text-4xl font-bold'>{children}</h1>
    </div>
  )
}

export default Title
