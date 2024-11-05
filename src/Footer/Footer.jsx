import React from 'react'
import "./Footer.css"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

function Footer() {
  return (
    <div className='footer-container' id='contact'>
      <p>For inquiries or to schedule a consultation</p>

      <h2>Contact Us</h2>

      <div className="contact-details">
         <div className="whatsapp-contact"><WhatsAppIcon /> <p>WhatsApp: +27 637 759 413</p></div>

        <div className="phone-contact"><PhoneIcon /><p>Phone: +27 734 936 115</p></div>
      </div>

     

    </div>
  )
}

export default Footer