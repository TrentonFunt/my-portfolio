import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


const Contact = () => {
  const [letterClass] = useState('text-animate')
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    if (refForm.current.checkValidity()) {
      emailjs
        .sendForm (
          'service_n3pa6u9',
          'template_ndfidn8',
          refForm.current,
          'rsFrod0JtML5aaWrD'
        )
        .then (
          () => {
            alert('Message successfully sent!')
            refForm.current.reset()
          },
          () => {
            alert('Failed to send message, please try again')
          }
        )
    } else {
      alert('Please fill out all required fields correctly')
    }
  }

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            < AnimatedLetters
            letterClass={letterClass} 
            strArray={['C','o','n','t','a','c','t',' ','m','e']} 
            idx={15}
            />
          </h1>
          <p>
            I am open to working with IT companies on any freelance opportunities
            or collaboration on projects. For any questions and further enquiries,
            please contact me using the form below.
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required />
                </li>
                <li className='half'>
                  <input type='email' name='email' placeholder='Email' required />
                </li>
                <li>
                  <input type='text' name='subject' placeholder='Subject' required />
                </li>
                <li>
                  <textarea placeholder='Message' name='message' required />
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Tiwalade Adegoke,
          <br />
          Lagos,Nigeria
          <br />
          <span>ddejilade22@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[6.5095, 3.3711]} zoom={20}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{{{z}/{x}/{y}.png" />
            <Marker position={[6.5095, 3.3711]}>
              <Popup>Hello there!!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>    
      <Loader type='pacman' />
    </>
  )
}



export default Contact