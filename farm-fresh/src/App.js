import React from 'react';
import Consumer from './components/Consumer';
import NavBar from './components/navigation/NavBar';



function App() {
    return (
      <div className="App">
          <NavBar/>
          {/* <LoginForm/> */}
          <Consumer />
      </div>
);
  }

export default App;