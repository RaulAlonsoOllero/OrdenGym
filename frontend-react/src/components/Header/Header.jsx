import React, { useState } from 'react';
import {Link} from "react-scroll"
import './Header.css'
import Bars from '../../assets/bars.png'
import Logo from '../../assets/descarga.png'

const Header = () =>{ 

    const mobile = window.innerWidth<=768 ? true: false;
    const[menuOpened,setMenuOpened] = useState(false)
    return (
        <div className='header'>
            <img src={Logo} alt='' className='logo'/>
            {menuOpened === false && mobile === true ?(
                //literalmente, esto es un if/else
                <div
                style={{backgroundColor: 'var(--appColor)',padding:'1rem',borderRadius:'15px'}}
                onClick={()=>setMenuOpened(true)}>
                    <img src={Bars} alt="" style={{width: '1.5rem',height:'1.5rem'}}/>
                </div>
            ): (
            <ul className='header-menu'>
                <li>
                    <Link to='hero' onClick={()=>setMenuOpened(false)}span={true} smooth={true}>Home</Link>
                </li>
                <li><Link to='Modalidades' onClick={()=>setMenuOpened(false)} span={true} smooth={true}>Modalidades</Link></li>
                <li><Link to='Reasons' onClick={()=>setMenuOpened(false)} span={true} smooth={true}>Nosotros</Link></li>
                <li><Link to='Plans' onClick={()=>setMenuOpened(false)} span={true} smooth={true} >Planes</Link></li>
                <li><Link to='Contact2' onClick={()=>setMenuOpened(false)} span={true} smooth={true}>Contacto</Link></li>
                <li><Link to='Testimonials' onClick={()=>setMenuOpened(false)} span={true} smooth={true}>Entrenadores</Link></li>
                
            </ul>
            )}
             
         
        </div>
        
    )
}

export default Header;