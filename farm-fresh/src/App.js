
import React from 'react';

//Navigation 
import NavBar from './components/navigation/NavBar';
import Routes from "./components/navigation/Routes";
import Popup from "reactjs-popup";
import BurgerIcon from "./components/navigation/BurgerIcon";
import Menu from "./components/navigation/Menu";
import "./index.css";



const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "40px"
};
const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
  border: "none"
};

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Popup
        modal 
        overlayStyle={{ background: "rgba(255,255,255,0.98" }} 
        contentStyle={contentStyle} 
        closeOnDocumentClick={false} 
        trigger={open => <BurgerIcon open={open} />} 
      >
        {close => <Menu close={close} />} 
      </Popup>
      <Routes />
      
    </div>
  );
}

export default App;

