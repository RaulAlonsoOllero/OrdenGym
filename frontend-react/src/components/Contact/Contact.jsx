import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <div className='Container'>
        <div className="row">
            <div className="column">
                <div className="contact-widget">


                    <div className="contact-widget-item">
                        <div className="icon">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="text">
                            <h5>Direccion</h5>
                            <p>C. de Sta. Ana Baja, 13, 28034 Madrid</p>
                        </div>
                    </div>

                        
                    <div className="contact-widget-item">
                        <div className="icon">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <div className="text">
                            <h5>Contáctanos</h5>
                            <p> 912 54 66 69</p>
                        </div>
                    </div>


    
                    <div className="contact-widget-item">
                        <div className="icon">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="text">
                            <h5>Mail</h5>
                            <p>orden.team@gmail.com</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="column">
                <div className="contact-form">
                    <h3>¿Quieres informacion? Escribenos un correo</h3>
                    <form action="#">
                        <input type="text" placeholder='Nombre'/>
                        <input type="Email" placeholder='Email'/>
                        <textarea placeholder='Comentario' />
                        <button className="contact-btn" type='submit'>Enviar</button>
                    </form>
                </div>
            </div>

        </div>

        <div className="row">
            <div className="map_column">
                <div className="contact-map">
                <iframe  className='iframe' title='iframe'
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12136.242396103344!2d-3.6886908!3d40.496043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3fa19475b9cc0541!2sOrden%20Team%20fight%20club!5e0!3m2!1ses!2ses!4v1675010134271!5m2!1ses!2ses" 
                 height="450" 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade">

                </iframe>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Contact