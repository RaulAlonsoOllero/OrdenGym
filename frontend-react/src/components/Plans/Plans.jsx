import React from 'react'
import './Plans.css'
import whiteTick from '../../assets/whiteTick.png'
import {plansData} from '../../data/plansData'
const Plans = () => {
  return (
    <div className='plans-container' id='Plans'>
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="plans-header">
            <span className='stroke-text'>CONSIGUE</span>
            <span>TUS METAS</span>
            <span className='stroke-text'>CON NOSTROS</span>
        </div>

        <div className="plans">
            {plansData.map((plan,i)=>(
                <div className="plan" key = {i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>€{plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature, i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    
                    <div><span> !!Apuntate hoy mismo¡¡</span></div>
                    <button className="btn">Join now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans