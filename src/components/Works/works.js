import React from 'react';
import "./works.css";
import Porfolio from "../../assets/chatgpt.jpg";
import Commerce from "../../assets/commerce.jpg";
import Simi from "../../assets/count.jpg";
import Quotes from "../../assets/my quote.jpg";
import Quiz from "../../assets/quiz.jpg";
import Count from "../../assets/simi.jpg";

const Works = () => {
  return (
    <section id='works'>
       <h2 className="worksTitle">My Portfolio</h2>
       <span className="worksDesc">I take pride in paying attention to the smallest details and making sure my work is pixel perfect, I am excited to bring my skills and experience to help businesses to achieve their goals and create a strong online presence</span>
    <div className="worksImgs">
        <img src={Porfolio} alt="" height="250px" className="worksImg" />
        <img src={Commerce} alt="" height="250px" className="worksImg" />
        <img src={Simi} alt="" height="280px" className="worksImg" />
        <img src={Quotes} alt="" height="280px" className="worksImg" />
        <img src={Quiz} alt="" height="250px" className="worksImg" />
        <img src={Count} alt="" height="250px" className="worksImg" />
    </div>
    <button className="workBtn">See More</button>
    </section>
  )
}

export default Works