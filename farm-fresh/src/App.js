
import React from 'react';
import { Route } from 'react-router-dom';


//Navigation 
import NavBar from './components/navigation/NavBar';
import Popup from "reactjs-popup";
import BurgerIcon from "./components/navigation/BurgerIcon";
import Menu from "./components/navigation/Menu";
import "./index.css";

//Components
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import SignUpForm from './components/SignupForm';
import Consumer from './components/Consumer';
import Farmer from './components/Farmer';
import Faq from './components/Faq';





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
            <Route exact path="/" component={SignUpForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={LoginForm} />
            <Route path="/faq" component={Faq} />
            <Route path="/consumer" component={Consumer} />
            <Route path="/farmer" component={Farmer} />
    </div>

  );
}

export default App;

