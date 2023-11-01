import React from 'react'
import './Style.css'
export default function Land({number}) {
  return (
    <div id='land' >
        <ul id='list' >
            <input type='text' placeholder='description' />
            <input type='text' placeholder='Date' />
            <input type='text' placeholder='Amount' />
            <button>Submit</button>
            <p></p>
        </ul>
    </div>
  )
}
