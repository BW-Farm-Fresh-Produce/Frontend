import React from 'react';
import { Route } from 'react-router-dom';
import SignupForm from '../../components/SignupForm';
import LoginForm from '../LoginForm';
import PrivateRoute from './PrivateRoute';
import Consumer from '../Consumer';
import Farmer from '../../components/Farmer';

const Routes = () => {
    return (
        <div>
            {/* <PrivateRoute exact path="/" component={Consumer} />  */}
            <Route path="/login" component={Consumer} /> 
            <Route path="/login" component={LoginForm} /> 
            <Route path="/signup" component={SignupForm} /> 
            <Route path="/farmer" component={Farmer} />

        </div>
    )
}

export default Routes