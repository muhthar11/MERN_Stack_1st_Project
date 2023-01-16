import axios from 'axios'
import React, { useEffect } from 'react'

function Home() {
 
   const getData =async()=>{
      const response = await axios.post('/api/user/get-user-info-by-id',{},{
        headers: { 
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
   }

  useEffect(()=>{
    getData();
  },[])

  return (
    <div>home</div>
  )
}

export default Home