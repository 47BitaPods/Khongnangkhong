import React from 'react'
import Form from "../Form/Form"
import Footer from '../Footer/Footer'
import Navbar from '../NavBar/NavBar'
import "./contact.css"

const Contact = () => {
  return (
    <div>
        <Navbar />
        <div className='s4'>
            <Form className="s4-in" />
        </div>
        <Footer />
    </div>
  )
}

export default Contact;