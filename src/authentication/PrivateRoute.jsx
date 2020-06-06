import React from 'react';
import {Redirect , Route} from 'react-router-dom';
import * as AuthService from './AuthService'

const PrivateRoute = ({children, ...props}) => {
    return (
        AuthService.loggedIn() ? 
        <Route {...props}>
            {children}
        </Route>
        :        
        <Redirect exact to='/login'/>
    )
}

export default PrivateRoute;