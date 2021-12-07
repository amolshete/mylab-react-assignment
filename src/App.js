import React from 'react'
import './App.css';
import { SideNav } from './components/sidebar/sidenav'
import {HomePage} from './container/main-content/index'
function App() {
  return (
    <div className="App ">
      <div className="container flex-container">
      <SideNav />
      <div className="mainContent">
       <HomePage/>
      </div>
      </div>
    </div>
  );
}

export default App;
