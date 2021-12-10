import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './css/home.css'
function Home() {
  const [kuralExp, setKural] = useState([])
  useEffect(() => {
    const thirukural_url = 'https://api-thirukkural.vercel.app/api?num=2'

    axios.get(thirukural_url).then((res) => {
      setKural(res.data)
      console.log(kuralExp)
    })
  }, [])

  //   const [kural, setKural] = useState([])
  //   const fetchapi = async () => {
  //     try {
  //       const kural_api = await axios.get(
  //         'https://api-thirukkural.vercel.app/api?num=2'
  //       )

  //       setKural(kural_api.data)
  //       console.log(kural_api.data)
  //       //   const kuralLine1 = kural_api.line1
  //       //   const kuralLine2 = kural_api.line2
  //       //   const engTrans = kural_api.eng
  //       //   console.log(kural_api.data)
  //       //   console.log(kuralLine1)
  //       //   console.log(kuralLine2)
  //       //   console.log(engTrans)
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   }
  //   useEffect(() => {
  //     fetchapi()
  //   }, [])
  return (
    <div>
      <h2 className='welcomr_title'>Tring Library Management</h2>
      {/* {Object.keys(kuralExp).map((item) => {
        return (
          <div key={item.num.[]}>
            <p key={item.num}>{item.num}</p>
          </div>
        )
      })} */}
    </div>
  )
}

export default Home

