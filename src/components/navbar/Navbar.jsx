import React from 'react'
import "./navbar.scss"
import { motion } from "motion/react"
import Sidebar from '../sidebar/Sidebar'
const Navbar = () => {
  return (
    <div className='navbar'>
      {/* sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Anurag</motion.span>
        <div className='social'>
            <a href="#"><img src="/instagram.png" alt="" /></a>
            <a href="#"><img src="/github.png" alt="" /></a>
            <a href="#"><img src="/linkedin.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
