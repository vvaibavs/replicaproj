import Link from 'next/link'
import React from 'react'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
    const {user} = UserAuth()
    console.log(user)
  return (
    <div>
      <ul>
        <li>
            <Link href='/'>Home</Link>
        </li>
        <li>
            <Link href='/about'>About</Link>
        </li>
        <li>
            <Link href='/profile'>Profile</Link>
        </li>
      </ul>
      <ul className="flex">
        <li>
            Login
        </li>
        <li>
            Sign In
        </li>
      </ul>
    </div>
  )
}

export default Navbar
