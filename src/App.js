import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {

  const [mode, setmode] = useState('light')
  const [Progress, setProgress] = useState(0)

  const toggleMode = () => {

    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#0f0f0f';

    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white';

    }
  }

  const myProgress = (progress) =>{
    setProgress(progress)
  }

  const pageSize = 6;
  const apiKey = 'd7b26bbab6084d12aac1148133bb9153';
    return (
      <div>
        <Router>
          <Navbar mode={mode} toggleMode={toggleMode} />
          <LoadingBar
            color='#f11946'
            progress={Progress}
          />
          <Routes>
            <Route path='/' element={<News myProgress={myProgress} apiKey={apiKey} mode={mode} key='general' pageSize={pageSize} country='in' category='general' />}></Route>
            <Route path='/general' element={<News myProgress={myProgress} apiKey={apiKey} mode={mode} key='general' pageSize={pageSize} country='in' category='general' />}></Route>
            <Route path='/business' element={<News myProgress={myProgress} apiKey={apiKey} mode={mode} key='business' pageSize={pageSize} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<News myProgress={myProgress} apiKey={apiKey} mode={mode} key='entertainment' pageSize={pageSize} country='in' category='entertainment' />}></Route>
            <Route path='/health' element={<News myProgress={myProgress} apiKey={apiKey} mode={mode} key='health' pageSize={pageSize} country='in' category='health' />}></Route>
            <Route path='/science' element={<News myProgress={myProgress} apiKey={apiKey} mode={mode} key='science' pageSize={pageSize} country='in' category='science' />}></Route>
            <Route path='/sports' element={<News myProgress={myProgress} apiKey={apiKey} mode={mode} key='sports' pageSize={pageSize} country='in' category='sports' />}></Route>
            <Route path='/technology' element={<News myProgress={myProgress} apiKey={apiKey} mode={mode} key='technology' pageSize={pageSize} country='in' category='technology' />}></Route>
            {/* key has to be given so otherwise it wont work, key basically tell react that this component is unique */}
          </Routes>
        </Router>
      </div>
    )
}

export default App