import React from 'react';
import MessagePage from './MessagePage';
import './App.css';

function Tong() {
  return (
  <div className="tongpage">
    <div className="z">
      <h2>109學年度</h2>
      <h2>長庚大學跨領域人才培育計畫</h2>
    
    <hr></hr>

      <h3>榮譽學程 榮譽生</h3>
      <h3>管理學院 資訊管理學系</h3>
      <h1>葉芷彤</h1>
      <h1>記得存檔</h1>
      
    <br></br>
    
      <h4>B0944235@cgu.edu.tw</h4>
      <h4>桃園市龜山區文化一路259號</h4>
    
      {//<img src={require('./images/t.jpg')}  /> 
      }
    
    </div>

    <div> 
      <MessagePage/>
    </div>
  </div>
    
    
    
    
  );
}

export default Tong;
