import Link from 'next/link'
import React from 'react'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
    const { user, googleSignIn, logOut } = UserAuth()
    console.log(user)

    const handleSignIn = async() => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }
    }
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
      <ul className="flex-column">
        <li onClick={handleSignIn} className = 'p-2 cursor-pointer'>
            Sign In
        </li>
        <li>
            Sign In
        </li>
      </ul>
    </div>
  )
}

export default Navbar
