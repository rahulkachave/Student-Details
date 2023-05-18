import React from 'react'
import { NavLink } from 'react-router-dom'
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <div> <footer className='footer'>

    
        
<a href="mailto:rahulkachave2980@gmail.com" target='_blank'rel="noreferrer"> <ContactMailIcon style={{ fontSize: '45px' }} /></a> 
  <a href="https://www.facebook.com/"  > <FacebookIcon style={{ fontSize: '45px' }}/></a>
  <a href ="https://www.instagram.com/accounts/login/" target='_blank'rel="noreferrer"><InstagramIcon style={{ fontSize: '45px',color:'orange' }}/></a>
 <a href ="https://web.whatsapp.com/" target='_blank'rel="noreferrer"><WhatsAppIcon style={{ fontSize: '45px',color:'green' }}/></a>
 <NavLink  to='/contact' ><CallIcon style={{ fontSize: '45px',color:'green' }}/></NavLink>
 <NavLink to="https://github.com/topics/login" target='_blank'rel="noreferrer">git hub</NavLink>
   </footer>
    </div>
  )
}

export default Footer