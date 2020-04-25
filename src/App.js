import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Home from './components/home'
import About from './components/about'
import Timeline from './components/timeline'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Home></Home>
					<About></About>
					<Timeline></Timeline>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;