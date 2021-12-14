import React from 'react'
import './home.css'
import Navigation from '../navigation/nav'
function Home (){


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
      <Navigation/>
      <h2 className='welcome_title'>Tring Library Management</h2>
    </div>
  )
}

export default Home

