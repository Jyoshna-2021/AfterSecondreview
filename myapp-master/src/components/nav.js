import React, { useState, useEffect } from 'react'
import './css/nav.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Navigation() {
  useEffect(() => {
    const thirukural_url = 'https://api-thirukkural.vercel.app/api?num=2'

    axios.get(thirukural_url).then((res) => {
      const kuralExp = res.data
      const kuralLine1 = kuralExp.line1
      const kuralLine2 = kuralExp.line2
      const engTrans = kuralExp.eng
      console.log(kuralExp)
      console.log(kuralLine1)
      console.log(kuralLine2)
      console.log(engTrans)
    })
  })

  return (
    <div>
      <nav>
        <div className='topnav'>
          <ul>
            <Link to='/'>
              <li className='active'>Home</li>
            </Link>
            <Link to='/about'>
              <li>Profile</li>
            </Link>
            <Link to='/booklist'>
              <li>Book List</li>
            </Link>
            <Link to='/transaction'>
              <li>Transaction</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
