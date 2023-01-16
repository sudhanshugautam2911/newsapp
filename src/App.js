import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  constructor() {
    super();
    console.log("hello of app");
    this.state = {
      mode: 'light'

    }
  }

  toggleMode = () => {
    console.log("toggle clicked");

    if (this.state.mode === 'light') {
      this.setState({
        mode: 'dark'
      })
      document.body.style.backgroundColor = '#0f0f0f';
      console.log('mode is ' + this.state.mode);

    } else {
      this.setState({
        mode: 'light'
      })
      document.body.style.backgroundColor = 'white';
      console.log('mode is ' + this.state.mode);

    }
  }

  state = {
    progress:0
  }
  setProgress = (progress) =>{
    this.setState({progress: progress})
  }

  pageSize = 6;
  apiKey = 'd7b26bbab6084d12aac1148133bb9153';
  render() {
    return (
      <div>
        <Router>
          <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} mode={this.state.mode} key='general' pageSize={this.pageSize} country='in' category='general' />}></Route>
            <Route path='/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey} mode={this.state.mode} key='general' pageSize={this.pageSize} country='in' category='general' />}></Route>
            <Route path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} mode={this.state.mode} key='business' pageSize={this.pageSize} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} mode={this.state.mode} key='entertainment' pageSize={this.pageSize} country='in' category='entertainment' />}></Route>
            <Route path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} mode={this.state.mode} key='health' pageSize={this.pageSize} country='in' category='health' />}></Route>
            <Route path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} mode={this.state.mode} key='science' pageSize={this.pageSize} country='in' category='science' />}></Route>
            <Route path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} mode={this.state.mode} key='sports' pageSize={this.pageSize} country='in' category='sports' />}></Route>
            <Route path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} mode={this.state.mode} key='technology' pageSize={this.pageSize} country='in' category='technology' />}></Route>
            {/* key has to be given so otherwise it wont work, key basically tell react that this component is unique */}
          </Routes>
        </Router>
      </div>
    )
  }
}
