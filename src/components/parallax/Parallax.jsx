import { useRef } from "react"
import "./parallax.scss"
import { motion, useScroll, useTransform} from "motion/react"

const Parallax = ({type}) => {
  const ref = useRef()
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const yText = useTransform(scrollYProgress, [0,1],["0%","300%"])
  const yBg = useTransform(scrollYProgress, [0,1],["0%","40%"])

  return (
    <div className="parallax" ref={ref} style={{background:type==="experience" ? "linear-gradient(180deg, #111132, #0c0c1d)" : "linear-gradient(180deg, #111132, #505064)"}}>
      <motion.h1 style={{y:yText}}>{type==="experience" ? "Experience" : "My Projects"}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{y:yBg, backgroundImage:`url(${type==="experience"? "/planets.png":"/sun.png"})`}} className="planets"></motion.div>
      <motion.div style={{x:yBg}} className="stars"></motion.div>
    </div>
  )
}

export default Parallax
