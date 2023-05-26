import React from 'react'
import './Testimonials.css'
import {testimonialsData}from "../../data/testimonialsData"
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { useState } from 'react'
import {motion} from 'framer-motion'

const Testimonials = () => {

const transition = {type:"spring",duration:1}    
const [selected,setSelected] = useState (0)
const tLength = testimonialsData.length;

  return (
    <div className='Testimonials'>
        <div className="left-t">
            <span>Entrenadores</span>
            <span className='stroke-text'>Conoce a</span>
            <span>Nuestros profesionales</span>
            <motion.span
             key={selected}
             initial={{opacity:0, x:100}}
             animate={{opacity:1, x:0}}
             exit={{opacity:0, x:-100}}
             transition={{...transition,type:'tween'}}>
                {testimonialsData[selected].review}
            </motion.span>
            <span>
                <span style={{color: 'var(--orange)'}}>
                {testimonialsData[selected].name}
                </span>{" "}
                -{testimonialsData[selected].status}
            </span>
        </div>
        <div className="right-t">
            <motion.div
            initial={{opacity:0, x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{...transition,type:'tween'}}
            ></motion.div>
            <motion.div
            initial={{opacity:0, x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{...transition,type:'tween'}}
            ></motion.div>
            <motion.img 
            key={selected}
            initial={{opacity:0, x:100}}
            animate={{opacity:1, x:0}}
            exit={{opacity:0, x:-100}}
            transition={{...transition,type:'tween'}}
            src={testimonialsData[selected].image} alt=""/>
            <div className='d1'></div>
            <div className='d2'></div>
            <div className="arrows">
                <img src={leftArrow} alt="" 
                //chequea si el index del testimonial es 0, es decir, que si estamos en el primer testimonial
                //luego, no retornará el ultimo estimonial
                //si no estamos en el ultimo testimonial, nos dara el anterior, y si estamos en el ultimo, nos dara el primero
                onClick={()=>{
                    selected == 0 
                    ? setSelected(tLength - 1)
                    : setSelected((prev) => prev - 1)
                }}/>
                <img 
                    onClick={()=>{
                        selected === tLength -1 
                        ? setSelected(0)
                        : setSelected((prev) => prev + 1)
                    }}
                src={rightArrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Testimonials