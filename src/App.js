import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Tong from './Tong';
import Hsiao from './Hsiao';
import Inj from './Inj';
import Siou from './Siou';
import Lun from './Lun';

function App() {
  return (
    <div>
      <Router component={Home}>
        <div>
          <div class="topnav">
            <a class="active" href="/Home">Home</a>
            <a href="/Tong">tong</a>
            <a href="/Hsiao">hsiao</a>
            <a href="/Inj">inj</a>
            <a href="/Siou">siou</a>
            <a href="/Lun">lun</a>
          </div>
          <Routes>
            <Route path="/" element={<Home />} component={Home}/>
            <Route path="/Home" element={<Home />}/>
            <Route path="/Tong" element={<Tong />} />
            <Route path="/Hsiao" element={<Hsiao />} />
            <Route path="/Inj" element={<Inj />} />
            <Route path="/Siou" element={<Siou />} />
            <Route path="/Lun" element={<Lun />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
  
}


export default App;