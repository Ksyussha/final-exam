import './Footer.css';
import React from "react";
import inst from '../images/instagram.png'


const Footer =()=> {
  return (
    <div className='flexColumn'>
    <div className='column1'>
        <h1>guideMan</h1>
        <h1>www.guide.man</h1>
        <p>Путешествия и лекции по Казахстану с экспертами высокого уровня в области истории, культуры, науки, дизайна и архитектуры</p>
        </div>
        <div className='column2'>
        <h1>+7 (777) 777-77-77</h1>
        <a href='https://instagram.com/kse.ssha?igshid=YmMyMTA2M2Y='><img src={inst}></img></a>
        </div>
        </div>
   
  );
}

export default Footer;