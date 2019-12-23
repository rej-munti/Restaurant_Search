import {Link} from 'react-router-dom';
import React from 'react';
import '../App.css';
import Main_logo from '../img/main_logo.png'


const Home = ()=> {
  return (
    <>
  <div className="MainContainer">
  <div className="logo"><img src={Main_logo} alt="logo"/></div>
  <div className="but">
  <Link to='/SuggestionPage' style={{textDecoration: 'none'}}><button>اقترح</button></Link>
  </div>
  <div className="Info">
  <Link to='/MakeAccount' style={{textDecoration: 'none'}}><span>إنشاء حساب</span></Link>
  <span> | </span>
  <Link to='/LogIn' style={{textDecoration: 'none'}}><span>تسجيل دخول</span></Link>
  </div>
  </div>
  </>
);
};


export default Home;
