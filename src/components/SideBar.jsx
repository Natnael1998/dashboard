import React from 'react'
import {FaChartPie,FaTicketAlt,FaLightbulb} from "react-icons/fa"
import {BsPeopleFill} from "react-icons/bs" 
import {RiArticleLine,RiSettings4Fill} from "react-icons/ri"
import {GiPerson} from "react-icons/gi"
import {IoMdSettings} from "react-icons/io"
import {FaAward} from "react-icons/fa"
import { Link } from 'react-router-dom'
import "../Sidebar.css"
const SideBar = () => {
    

        const activePage = window.location.pathname;
        const navLinks = document.querySelectorAll("ll")
        navLinks.forEach(l => {
            if(l.href.includes(`${activePage}`)){
                l.classList.add("active")
        
            }
        })
        console.log(navLinks)
        
  return (
    <div className='SideBar'>
<div className='LogoContain'>
    
<div className="logoBackGround">
<div className='logo'></div>
  </div>

<p className='loginTitle '>Dashboard Kit </p>


</div>



<div className="SideBarOptions">
    <Link className='ll' to="/overview">
    <div className='items'>
    
 <FaChartPie size={17} className='icon'/>
<p className='itemText'>Overview</p>
</div>

    </Link>


<Link className='ll' to="/tickets">
<div className='items'>
    
 <FaTicketAlt size={17} className='icon'/>
<p className='itemText'>Tickets</p>
</div>
</Link>



<div className='items'>
    
 <FaLightbulb size={17} className='icon'/>
<p className='itemText'>Ideas</p>
</div>


<div className='items'>
    
 <BsPeopleFill size={20} className='icon'/>
<p className='itemText'>Contacts</p>
</div>


<div className='items'>
    
 <GiPerson size={17} className='icon'/>
<p className='itemText'>Agents</p>
</div>

<div className='items'>
    
 <RiArticleLine size={17} className='icon'/>
<p className='itemText '>Articles</p>
</div>









<div className='L'></div>

<div className='items'>
    
 <IoMdSettings size={17} className='icon'/>
<p className='itemText '>Settings</p>
</div>

<div className='items'>
    
 <FaAward size={17} className='icon'/>
<p className='itemText '>Subscription</p>
</div>

</div>




    </div>


  )
}

export default SideBar