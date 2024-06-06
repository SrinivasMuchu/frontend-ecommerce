import React from 'react'
import Topbar from '../TopBar/Topbar'
import Carousel from '../Carousel/Carousel'

function Home() {
  return (
    <div style={{display:'flex',
        flexDirection:'column'
    }}>
        <Topbar/>
        <Carousel/>
    </div>
  )
}

export default Home