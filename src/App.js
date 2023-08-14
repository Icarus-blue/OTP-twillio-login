import React from 'react';
import AppRoutes from './Routes';
import './App.css'

function App() {
  const style = {
    marginTop: '100px', // You can adjust the value as needed
  };
  return (
    <div className="App" style={style}>
      <AppRoutes />
    </div >
  );
}

export default App;
