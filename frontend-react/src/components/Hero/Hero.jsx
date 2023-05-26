import React from 'react';

import '../../App.css'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/antonio1.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import {motion} from 'framer-motion'

const Hero = () =>{ 
    const transition = {type:'spring', duration : 3}
    const mobile = window.innerWidth<=768 ? true: false;
    return (
        <div className='hero'>
            <div className="blur hero-blur"></div>
            <div className='left-h'>
                <Header></Header>
                <div className='the-best-ad'>
                    <motion.div
                    initial={{left:mobile? "178px":'238px'}}
                    whileInView={{left:'8px'}}
                    transition={{...transition,type:'tween'}}

                    >
                    </motion.div>
                    <span>El mejor gimnasio de muay-thai y boxeo de Madrid </span>
                </div> 
                {/*Hero Heading */}
                <div className='hero-text'>
                    <div className='div1'>
                        <span >Orden</span>
                        <span>Team</span>
                    </div>
                    <div>
                        <span className='stroke-text'>Muay thai </span>
                    </div>
                   
                    <div className='text1'>
                        <span>En el gimnasio <b>Orden Team</b>, te enseñamos artes marciales con el mejor estilo, tanto a nivel basico como en nivel experto.</span>
                    </div>
                </div>
                {/*figures*/}
                <div className='figures'>
                    <div>
                        <span>+100</span>
                        <span>Alumnos Matriculados</span>
                    </div>
                    <div>
                        <span>+30</span>
                        <span>Programas de entrenamiento</span>
                    </div>
                    <div>
                        <span>+40</span>
                        <span>Horas  semanales</span>
                    </div>
                </div>

            </div>
            <div className='right-h'>
                <button className='btn'>Un gimnasio de Guerreros</button>
                <motion.div 
                initial={{right:"-1rem"}}
                whileInView={{right:"4rem"}}
                transition={{...transition,type:'tween'}}
                className='heart_rate'>
                    <img src={Heart} alt=""/>
                    <span>OrdenTeam</span><span>Ven a probar</span>
                </motion.div>
                <img src={hero_image}alt=""className='hero_image'/>
                <motion.img 
                 initial={{right:"11rem"}}
                 whileInView={{right:"26rem"}}
                 transition={{...transition,type:'tween'}}
                src={hero_image_back} alt="" className="hero_image_back"/>
                <motion.div 
                initial={{right:"39rem"}}
                whileInView={{right:"29rem"}}
                transition={{...transition,type:'tween'}}
                className='calories'>
                    <img src={Calories} alt=""/>
                    <div><span>Calorias Quemadas</span><span>1550</span></div>
                </motion.div>
            </div>
             
        </div>
        
    )
}


export default Hero;