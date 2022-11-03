import './App.css';
import Main from './components/page_main/Main';
import Popular from './components/cityTour/Popular';
import Tours from './components/natureTours/AllTours';
import {
  Routes, 
  Route
} from 'react-router-dom';
import {Link} from 'react-router-dom'
import logo from './components/images/logo.png'
import { useState } from 'react';
import Popup from './components/QPopup/Popup';
import Footer from './components/footer/Footer';

const App =()=>{
  const [buttonPopup, setButtonPopup] = useState(false)
  return( 
    <div>
      <div className='logo'>
          <img src={logo}></img>
        </div>

      <div className='center'>
      <div className='flex'>
      <div className='lishka'>
    <Link to="/main">main </Link>
  </div>
  <div className='lishka'>
    <Link to="/popular">city tours </Link>
  </div>
  <div className='lishka'>
    <Link to="/allkz">nature tours</Link>
  </div>
  <div className='lishka'>
    <Link to="/allkz">cart</Link>
  </div>
  <div className='svgIn'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" 
     onClick={()=> setButtonPopup(true)}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>


<Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
  <div className="txt-input">
    <div>
  <h1 className='questions'>Any questions?</h1>
  </div>
  <div className="forms">
  <input type="email" placeholder="your email"  id="email"
       pattern=".+@globex\.com" size="30" required></input>
       <textarea rows="5" cols="80" id="TITLE">
</textarea>
  </div>
  </div>
</Popup>
</div>
</div>
  </div>
      <Routes>
      <Route path="/" element={<Main/> }/>
      <Route path="/main/*" element={<Main/>}/>
      <Route path="/popular" element={<Popular/>}/>
      <Route path="/allkz" element={<Tours/>}/>
      </Routes>

      <Footer/>
  </div>
  
  
  )
}
export default App;
