import React from 'react';
import Header from './components/Header';
import Description from './components/Description';
import Photos from './components/Photos';
import Map from './components/Map';
import Sidebar from './components/Sidebar';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="main-content">
          <Description />
          <Map />
          <Photos />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
