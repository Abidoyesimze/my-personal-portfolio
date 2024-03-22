import React from 'react';
import "./intro.css"
import bg from "../../assets/simze.jpg"
import btnImg from "../../assets/hire.png"

const intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
      <span className='hello'>Hello,</span>
      <span className="introText">I'm<span className='introName'>Mr-simze</span><br />Frontend developer</span>
       <p className="introPara">I am a skilled web designer with experience in creating <br />visually appealing and user-friendly websites </p>
       <a><button className="btn"><img src={btnImg} height="50px" alt="Hire me" className="btnImg"/>Hire me</button></a>
       </div>
      
      <img src={bg} alt="" width="500px" className="bg" />
    </section>
  )
}

export default intro;