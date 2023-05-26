import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import './Contact2.css'
import ProgressButton from 'react-progress-button'
import emailjs from '@emailjs/browser'

const Contact2 = () => {
  const form = useRef()
  const [buttonText, setButtonText] = useState("Enviar"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState
  const changeText = (text) => setButtonText(text);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_8clpn1k', 'template_sdn4iw8', form.current, 'UyQeaLFKM8uZWhTpz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="container" id="Contact2">
      <div className="contact-header">
        <span className='stroke-text'>¿Quieres </span>
        <span>Contactar?</span>
        </div>
        <div class="login-box">
            <h2>¿Necesitas informacion?</h2>
            <form ref = {form} onSubmit={sendEmail}>
                    <div class="user-box">
                    <input type="text" name="from_name" required=""/>
                    <label>Email</label>
                    </div>
                    <div class="user-box">
                    <input type="text" name="message" required=""/>
                    <label>Texto</label>
                    </div>
                    <a>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <button className="btn"
                    onClick={() => changeText("Enviado!!!")}>{buttonText}</button>
                    
                    </a>
            </form>
        </div>
        
        <div className="row">
            <div className="map_column">
     
                <iframe  className='iframe' title='iframe'
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12136.242396103344!2d-3.6886908!3d40.496043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3fa19475b9cc0541!2sOrden%20Team%20fight%20club!5e0!3m2!1ses!2ses!4v1675010134271!5m2!1ses!2ses" 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade">

                </iframe>
                
            </div>
        </div>
        <div className="telefono">
        <h1>Teléfono</h1>
        <h2>666 17 99 67</h2>
        </div>
    </div>


  )
}

export default Contact2