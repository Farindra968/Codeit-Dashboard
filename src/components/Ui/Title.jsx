import React from 'react'

function Title({title,size, color}) {
  return (
    <div>
          <h1 className={`${size} font-semibold py-3 ${color}`}>{title}</h1>
    </div>
  )
}

export default Title
