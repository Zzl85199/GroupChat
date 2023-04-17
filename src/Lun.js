import React from 'react';
import './App.css';
import MessagePage from './MessagePage';

function Lun() {
  return (
    <div className="homepage">
      <div className="profile-card">
        <img src={require('./images/tuokuze.jpg')} alt="Profile" className="profile-img" />
        <h1 className="profile-name">Lun</h1>
        <p className="profile-title">handsomebro</p>
      </div>
      <div>
        
      </div>

      <div>
        <MessagePage/>
      </div>
    </div>
  );
}

export default Lun;