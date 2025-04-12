import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform} from "motion/react"

const items = [
    {
        id: 1,
        title: "Chiranjeevi",
        img: "chiran.png",
        desc: "Chiranjeevi is a web application built using React.js for the frontend and Spring Boot for the backend. It enables users to book an ambulance and consult a doctor simultaneously, ensuring quick and efficient medical assistance in emergencies.",
    },
    {
        id: 2,
        title: "Tripti Foundation",
        img: "tripti.png",
        desc: "Tripti Foundation is a web platform developed using React.js and Spring Boot, designed to facilitate donations to people in need. It provides a secure and user-friendly interface for donors to contribute and support various humanitarian causes.",
    },
    {
        id: 1,
        title: "Social Sphere",
        img: "social.png",
        desc: "Social Sphere is a full-featured social media platform built with React.js and Spring Boot. Along with standard social networking functionalities, it introduces a unique feature: chat rooms on trending topics, allowing users to join live debates and discussions in real time.",
    },
];
const Single = ({item}) => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({target:ref,offset: ["start end", "end start"],});
    const y = useTransform(scrollYProgress, [0, 1], [-700,700]);
    return(
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
const Portfolio = () => {

  const ref = useRef()  

  const { scrollYProgress } = useScroll({target:ref, offset:["end end","start start"]});
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map((item)=>(
            <Single item={item} key = {item.id}/>
        ))}
    </div>
  )
}

export default Portfolio
