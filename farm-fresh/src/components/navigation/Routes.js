import React from "react";
import { Route } from "react-router-dom";

//Components
import LoginForm from "../../components/LoginForm";
import PrivateRoute from "./PrivateRoute";
import SignUpForm from "../SignupForm";
import Faq from "../Faq";
import Consumer from "../Consumer";
import Farmer from "../Farmer";

const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={SignUpForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={LoginForm} />
            <Route path="/faq" component={Faq} />
            <Route path="/consumer" component={Consumer} />
            <Route path="/farmer" component={Farmer} />
        </div>
    );
};

export default Routes;
