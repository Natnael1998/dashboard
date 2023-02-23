import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillHome,AiOutlineRight} from "react-icons/ai"
import {BsFillBasketFill,BsPeopleFill} from "react-icons/bs"
import {HiSquares2X2} from "react-icons/hi2"
import {MdOutlineArticle} from "react-icons/md"
import {BiMessageDetail} from "react-icons/bi"
import {IoIosPeople} from "react-icons/io"
import {FaUserAlt} from "react-icons/fa"
import  {GiCash} from "react-icons/gi"
import "../sidebar.css"
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link className='ll' to="/home">
        <div className='PageItems'>
          <div className='PageItem'>
          <AiFillHome color='#22C55E' size={25}/>
          <p >Home</p>
          </div>
        
        </div>
        </Link>
      
          
       

        <p>Pages</p>

      <Link className='ll' to="/orders">
      
      <div className='PageItems'> 
          <div className='PageItem'>
          <BsFillBasketFill size={25} color="gray"/>
          <p>Orders</p>
          </div>
          <div className='PageItem'>
          <AiOutlineRight size={25} color="gray"/>
          </div>
         


        </div>
      </Link>
        {/*  */}
      <Link className='ll' to="/products"> 
      <div className='PageItems'> 
          <div className='PageItem'>
          <HiSquares2X2 size={25} color="gray"/>
          <p>Products</p>
          </div>
          <div className='PageItem'>
          <AiOutlineRight size={25} color="gray"/>
          </div>
         


        </div>
      </Link>
        {/*  */}
        <Link className='ll' to="/categories">
        <div className='PageItems'> 
          <div className='PageItem'>
          <MdOutlineArticle size={25} color="gray"/>
          <p>Categories</p>
          </div>
          <div className='PageItem'>
          <AiOutlineRight size={25} color="gray"/>
          </div>
         


        </div>
        </Link>
        {/*  */}
       <Link className='ll' to="/banners">
       <div className='PageItems'> 
          <div className='PageItem'>
          <BiMessageDetail size={25} color="gray"/>
          <p>Banners</p>
          </div>
          <div className='PageItem'>
          <AiOutlineRight size={25} color="gray"/>
          </div>
         


        </div>
       
       </Link>
        {/*  */}
       <Link className='ll' to="/roles">
       <div className='PageItems'> 
          <div className='PageItem'>
          <IoIosPeople size={25} color="gray"/>
          <p>Roles</p>
          </div>
          <div className='PageItem'>
          <AiOutlineRight size={25} color="gray"/>
          </div>
         


        </div>
       
       </Link>
        {/*  */}
        <Link className='ll' to="/customers">
        <div className='PageItems'> 
          <div className='PageItem'>
          <FaUserAlt size={25} color="gray"/>
          <p>Customers</p>
          </div>
          <div className='PageItem'>
          <AiOutlineRight size={25} color="gray"/>
          </div>
         


        </div>
        </Link>
        {/*  */}
       <Link className='ll' to="/coupons">
       <div className='PageItems'> 
          <div className='PageItem'>
          <GiCash size={25} color="gray"/>
          <p>Coupons</p>
          </div>
         
         


        </div>
       </Link>
        {/*  */}

        
       
        </div>
  )
}

export default Sidebar