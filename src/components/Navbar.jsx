import React from 'react'
import l from "../assets/Rectangle 6.png"
import "../navbar.css"
import {HiChevronDoubleLeft} from "react-icons/hi"
import {BsChevronDown} from "react-icons/bs"
const Navbar = (props) => {
  return (
    <div className='navbar'>
<div className='navbarC'>
<img src={l} alt="" />
<HiChevronDoubleLeft  size={35}></HiChevronDoubleLeft>

<p className='t'>{props.title}</p>
</div>
<div className='account'>
<img src="https://th.bing.com/th/id/R.9208eb307a8af3bd4f7856daf01b93c3?rik=d%2fk8ErUqHcshMg&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f37800000%2fRDJ-Smiles-3-robert-downey-junior-37893544-500-750.jpg&ehk=2MEfs3RjbL6vbyS%2bMPjv547Ga0xBi2szpoWD549BSyA%3d&risl=&pid=ImgRaw&r=0" alt="" />
<div className='details'>
<p>Natnael shemels</p>
<p>admin</p>
</div>
<BsChevronDown />

</div>
    </div>
  )
}

export default Navbar