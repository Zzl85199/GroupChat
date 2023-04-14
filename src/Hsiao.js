import React from 'react';
import cat from './images/cat.png';
import './Hsiao.css'
//import myImage from './image/rainbowcat.jpg';
function hsiao() {
  return (
    <div>
      <h1>Hsiao的網站</h1>
      <div className="test">
        <img src={cat} alt="rainbowcat" width="100" height="100" />
      </div>
      

      
    </div>
  );
}

export default hsiao;
