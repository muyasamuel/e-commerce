import React from 'react'

function Header() {
  return (
    <div className='bg-red-500 h-14 flex items-center justify-between px-8  '>
      <h1>E-Commerce </h1>
      <nav >
        <ul className='flex space-x-8 text-white capitalize'>
          <li>Home</li>
          <li>Feed</li>
          <li>About</li>
          <li>Contact </li>
        </ul>
      </nav>
       
       </div>
  )
}

export default Header