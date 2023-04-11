import React from 'react'
import Form from '../Components/Form'
import '../Style/Style.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

function Contact() {
  return (
    <section className='Contact'>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <img src='./images/contactus.png' />
      <Form />
    </section>
  )
}

export default Contact