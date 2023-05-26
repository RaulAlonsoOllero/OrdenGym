import React from 'react'
import './Modalidades.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
const modalidades = () => {
  return (
    <div className='Modalidades' id="Modalidades">
        <div className='modalidades-header'>
            <span className='stroke-text'>Explora</span> 
            <span>Nuestras</span> 
            <span className='stroke-text'>Modalidades</span>
        </div>
        <div className='program-categories'>
            {programsData.map((program)=>(
                <div className='category'>
                  {program.image}
                  <span>{program.heading}</span>
                  <span>{program.details}</span>
                  <div className="join-now"><span>Join Now</span><img src={RightArrow} alt="" className="src" /></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default modalidades