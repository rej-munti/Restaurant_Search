
import React from 'react';
import {Link} from 'react-router-dom';
import MapContainer from './MapContainer';
import Logo_header from '../img/logo_header.png'

const Suggestion =()=>{
return(
<>
<header className="header">
<Link to='/'><img id="logo_header" src={Logo_header}/></Link>
</header>
  <div className="MainContainer">
<MapContainer/>
<div id="restaurant_baner">
</div>
<button id="OpenIngoogle" style={{backgroundColor:"rgba(192,192,192,0.9)"}}> google maps فتح في</button>
<div id='another_sug'>
<button>اقتراح آخر</button>
</div>
</div>
</>
);
};

  export default Suggestion;
