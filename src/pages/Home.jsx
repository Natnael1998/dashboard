import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import "../home.css"
const Home = () => {
  return (
    <>
    <Navbar title="Home"/>

<Sidebar />
<div className='Home'>
  home
</div>

    </>
    
  )
}

export default Home