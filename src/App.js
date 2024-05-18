import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import BusinessNews from './components/BusinessNews';

const App =()=> {
  const [mode, setmode] = useState('light');
  const apikey=process.env.REACT_APP_NEWSHUB
  const [progress, setProgress]=useState(0)

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.background = '#191919';
    }
    else {
      setmode('light');
      document.body.style.background = 'white';
    }
  }

    return (
      <div>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
        <Router>
          <Navbar mode={mode} togglemode={togglemode} />
          <Routes>
            <Route exact path="/" element={<News mode={mode} togglemode={togglemode} setProgress={setProgress} apikey={apikey}  key="science" pageSize={8} country='in' category='science' />} />
            {/* <Route exact path="/business" element={<BusinessNews mode={mode} togglemode={togglemode} setProgress={setProgress} apikey={apikey}  key="business" pageSize={8} country='in' category='business' />} /> */}
            <Route exact path="/entertainment" element={<News mode={mode} togglemode={togglemode} setProgress={setProgress} apikey={apikey}  key="entertainment" pageSize={8} country='in' category='entertainment' />} />
            <Route exact path="/general" element={<News mode={mode} togglemode={togglemode} setProgress={setProgress} apikey={apikey}  key="general" pageSize={8} country='in' category='general' />} />
            <Route exact path="/health" element={<News mode={mode} togglemode={togglemode} setProgress={setProgress} apikey={apikey}  key="health" pageSize={8} country='in' category='health' />} />
            <Route exact path="/science" element={<News mode={mode} togglemode={togglemode} setProgress={setProgress} apikey={apikey}  key="science" pageSize={8} country='in' category='science' />} />
            <Route exact path="/sports" element={<News mode={mode} togglemode={togglemode} setProgress={setProgress} apikey={apikey}  key="sports" pageSize={8} country='in' category='sports' />} />
            <Route exact path="/technology" element={<News mode={mode} togglemode={togglemode} setProgress={setProgress} apikey={apikey}  key="technology" pageSize={8} country='in' category='technology' />} />
          </Routes>
        </Router>
      </div>
    )
  }
  export default App