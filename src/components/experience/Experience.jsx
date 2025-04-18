import "./experience.scss"
import { motion , useInView} from "motion/react"
import { useRef } from 'react';

const variants = {
  initial:{
    x:-500,
    y:100,
    opacity:0,
  },
  animate: {
    x: 0,
    opacity:1,
    y: 0,
    transition:{
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Experience = () => {

  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });


  return (
    <motion.div className="experience" variants={variants} initial="initial" ref={ref} animate = {"animate"}>
        <motion.div className="textContainer">
            <p>I focus on building reliable websites <br /> and intuitive interface</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
          <div className="title">
            <img src="/people.webp" alt="" />
            <h1>From <motion.b whileHover={{color: "orange"}}>Frontend</motion.b> Finesse</h1>
          </div>
          <div className="title">
            <h1>To <motion.b whileHover={{color: "orange"}}>Backend</motion.b> Logic</h1>
            <button>What I Do?</button>
          </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
          <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            <h2>Auriga Sage</h2>
            <p>Worked as a Web Developer at Auriga Sage, where I developed dynamic and responsive web applications using React and Tailwind CSS for the frontend, and Spring Boot for backend integration.</p>
            <button>Go</button>
          </motion.div>
          <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            <h2>Bharat Samvad</h2>
            <p>Worked as a Frontend Developer at Bharat Samvad, where I built the official website using React, focusing on responsive design, component-based architecture, and seamless user experience.</p>
            <button>Go</button>
          </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Experience
