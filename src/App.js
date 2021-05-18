import React from 'react';
import './App.css';

// import the two main components, sidebar also contains main dashboard content
import MenuBar from './components/MenuBar';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <SideBar />
    </div>
  );
}

export default App;
