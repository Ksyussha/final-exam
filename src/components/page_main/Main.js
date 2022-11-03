import './Main.css';
import React from "react";
import Popular from '../cityTour/Popular';
import { useState, useRef } from "react";
import {
    Routes, 
    Route
  } from 'react-router-dom';
  import {Link} from 'react-router-dom'

const Main =()=> {
  return (
    <div className='background'>
    <div className='cont'>
    <div>
        <h1 className='headline'>IT'S A SIMPLE GUIDE TO <a className='headline-a'>KAZAKHSTAN</a></h1>
        <p>our website will help you not to get lost and spend time in Kazakhstan with benefit! We have the most profitable tours in Kazakhstan</p>
        <p>don't waste a minute more, push the button, we will help you plan the perfect trip</p>
        <div className='buttonIn'>
        <button><Link to="/popular" className='link'>Learn more</Link></button>
        </div>
    </div>
        

        <Routes>
        <Route path="/popular" element={<Popular/>}/>
        </Routes>
        </div>
        </div>
   
  );
}

export default Main;