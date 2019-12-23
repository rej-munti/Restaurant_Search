import React from 'react';
import {Link} from 'react-router-dom'
import '../App.css';


const MakeAccount = () => {
  return(
    <div className="MainContainer">
    <form>
      <h1> إنشاء حساب</h1>
    <label>
    <input type="text" name="name" placeholder="الاسم"/>
    <input type="text" name="name" placeholder="البريد الإلكتروني"/>
    <input type="text" name="name" placeholder="كلمة المرور"/>
    <input type="text" name="name" placeholder="إعادة كلمة المرور"/>
       </label>
       <input type="submit" value="إنشاء" />
        <Link to='/' style={{textDecoration: 'none'}}><p>العودة</p></Link>
       </form>
   </div>
  );
};

export default MakeAccount;
