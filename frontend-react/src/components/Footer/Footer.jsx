import React from 'react'
import './Footer.css'
import Instagram from "../../assets/instagram.png"
import Facebook from "../../assets/Facebook.png"
import Youtube from "../../assets/youtube.png"
import Logo from "../../assets/descarga.png"


const Footer = () => {
  return (
    <div className='Footer-container'>
        <hr/>
        <div className="footer">
            <div className="social-links">
            <a href='https://www.instagram.com/ordenteamfightclub/?hl=es'> <img src={Instagram} alt="" /></a>
                <a href='https://www.facebook.com/masqueuneqipounafamilia'> <img src={Facebook} alt="" /> </a>
                <a href='https://www.youtube.com/@ordenteamfightclub6312'><img src={Youtube} alt="" /></a>
            </div>
            <div className="logo-f">
                <img src={Logo} alt="" />
            </div>
            <div className="blur footer-f-1">qq</div>
        <div className="blur footer-f-2">qq</div>
        </div>

    </div>
  )
}

export default Footer