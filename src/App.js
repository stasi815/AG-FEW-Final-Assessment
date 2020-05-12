import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import BandCount from './BandCount';
import BandsList from './BandsList';

const finalStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}

function App() {
  return (
    <div className="App">
      <div className={finalStyle}>
        <Heading />
        <BandCount />
        <BandsList />
      </div>
    </div>
  );
}

export default App;
