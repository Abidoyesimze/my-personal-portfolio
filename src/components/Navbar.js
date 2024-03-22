import React, { useState } from 'react'; 
 import styled from "styled-components";
 import logo from "../assets/logo.svg";
 import contactImg from "../assets/contact.png";
 import Mobile from "../assets/mobilejpeg"
 import { link } from "react-scroll";
 
 const Navbar = () => {
   const [activeItem, setActiveItem] = useState('home');
 
   const handleItemClick = (item) => {
     setActiveItem(item);
   };
 
   return (
     <Nav>
       <img src={logo} alt="logo" className='logo' height="90px" width="100px" />
       
       <div className="desktopMenuListItem">
         <a className={activeItem === 'intro' ? 'active' : ''} onClick={() => handleItemClick('home')}>Home</a>
         <a className={activeItem === 'skills' ? 'active' : ''} onClick={() => handleItemClick('about')}>About</a>
         <a className={activeItem === 'works' ? 'active' : ''} onClick={() => handleItemClick('portfolio')}>Portfolio</a>
         <a className={activeItem === 'clients' ? 'active' : ''} onClick={() => handleItemClick('clients')}>Clients</a>
       </div>
 
       <button className='desktopMenuBtn' onClick={() => {
         document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
       }}>
         Contact Me
       </button>
 
       <img src={Mobile} alt="logo" className='mobMenu' height="50px" width="50px" onClick={() => handleItemClick('contact')} />
     </Nav>
   );
 };


const Nav = styled.div`
height: 5rem;
width: 100vw;
max-width: 75rem;
margin: 0 ;
padding: 1rem  2rem;
display: flex;
align-items: center;
justify-content: space-between;
position: sticky;
margin-right: 50px;
top:0;
z-index: 3;

logo{
   object-fit: cover;
   height: 3rem;
   width: 4rem;
   float: left;
}

desktopMenuListItem{
   margin: 10px;
   cursor: pointer;
   justify-content: space-between;
   position: absolute;
}

desktopMenuListItem:hover{
   color: yellow;
   padding-bottom: 0.5rem;
   border-bottom: 1px solid yellow;
}

desktopMenuBtn{
   background: black;
   color: white;
   border: none;
   display: flex;
    align-items: center;
   justify-content: center;
   padding:  1rem;
   border-radius: 2rem;
}

desktopMenuImg{
   object-fit: cover;
   height: 1rem;
   width: 1rem;
   margin: 1rem;
   

}

:active{
   color: yellow;
   padding-bottom: 0%.5rem;
   border-bottom: 3px solid yellow;
}

.mobMenu{
   display: none;
   object-fit: cover;
   height: 1.8rem;
}

navMenu{
   position: absolute;
   top: 4rem;
   right: 2rem;
   z-index: 2;
   display: flex;
   flex-direction: column;
   padding: 0.5rem;
   border-radius: 1rem;
   min-width: 15rem;
   height: fit-content;
}

listItem{
   color: white;
   padding: 0%.5rem 3rem;
   margin: 0%.25rem;
}

@media screen and (max-width:720px) {
   .mobMenu{
      display: flex;
   }
   .desktopMenuListItem{
      display: none;
   }
   desktopMenuBtn{
      display: flex;
   }
}

`;

const desktopMenuListItem = styled.div``



export default Navbar;