import React from 'react'
import './Reasons.css'
import image1 from '../../assets/orden.jpg'
import image2 from '../../assets/orden2.jpg'
import image3 from '../../assets/orden3.jpg'
import image4 from '../../assets/orden4.jpg'
import nb from '../../assets/custom.jpg'
import adidas from '../../assets/222.png'
import nike from '../../assets/union.jpg'
import tick from '../../assets/tick.png'
const Reasons = () => {
  return (
    <div className='Reasons' id="reasons">
        <div className="left-r">
            <img src={image1} alt=""/>
            <img src={image2}alt=""/>
            <img src={image3}alt=""/>
            <img src={image4}alt=""/>
        </div>
        <div className="right-r">
            <span style={{fontSize:"2rem"}}>Algunas razones</span>
            <div>
                <span className='stroke-text'>Para</span>
                <br></br>
                <span>elegirnos</span>
            </div>

            <div className='details-r'></div>
            <div>
                <img src={tick} alt=""></img>
                <span>Entrenadores Expertos</span>
            </div>
            <div>
                <img src={tick} alt="" />
                <span>Entrena a tu nivel sin problemas</span>
            </div>
            <div>
                <img src={tick} alt="" />
                <span>Ven a probar una clase gratis</span>
            </div>
            <div>
                <img src={tick} alt="" />
                <span>Entrena con compañeros todos los dias</span>
            </div>
            <span
            style={{
                color:"var(--gray)",
                fontWeight: "normal",
            }}>
                Nuestros Representantes
            </span>
            <div className="partners">
                <img src={nb} alt="" className='custom'/>
                <img src={nike}alt="" />
                </div>
        </div>
    </div>
  )
}

export default Reasons