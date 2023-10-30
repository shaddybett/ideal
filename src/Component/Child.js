import React from 'react'

export default function Child({people}) {
  return (
    <div>
 <h1>Name:{people.name}</h1>
 <h1>Age:{people.age}</h1>
    </div>
  )
}

