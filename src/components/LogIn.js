import React from 'react';
import {Link} from 'react-router-dom'
import '../App.css';


const LogIn = () => {
  return(
    <div className="MainContainer">
    <form>
      <h1>تسجيل دخول</h1>
  <label>
    <input type="text" name="name" placeholder="البريد الإلكتروني"/>
    <input type="text" name="name" placeholder="كلمة المرور"/>
  </label>
  <input type="submit" value="دخول" />
  <Link to='/' style={{textDecoration: 'none'}}><p>العودة</p></Link>
</form>
</div>
  );
};

export default LogIn;
