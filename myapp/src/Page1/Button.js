import React from 'react'
import './Button.css'
export default function Page1() {
    return (
        <div>
           <h1 className='firstheading'>Science Fiction Stories</h1>
           <div className='ButtonSection'>
           <button className='btn'>New</button>
           <button className='btn'>In progress</button>
           <button className='btn'>Completed</button>
           <button className='btn'>Clear All</button>
           </div>
        </div>
    )
}
