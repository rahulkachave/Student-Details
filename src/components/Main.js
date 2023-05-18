import React from 'react'
import { NavLink } from "react-router-dom";
const Main = () => {
  document.title ="my new page";
  return (
    <div>
     
<header className='header'>

         <NavLink  to={'/app'} className={'link'} style={{paddingRight:'100px'}} >Home</NavLink>
        <NavLink to={'/about'} className={"link"} style={{paddingRight:'50px'}}>About</NavLink>
        <NavLink to={'/contact'} className={"link"} style={{paddingRight:'50px'}}>Contact</NavLink>
        <NavLink to={'/details'} className={"link"} style={{paddingLeft:'80px'}}>Details</NavLink>

        </header>
    </div>
   
  )
}

export default Main