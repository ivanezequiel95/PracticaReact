import React from 'react';
import './App.css';
import Login from './authentication/Login'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from './authentication/PrivateRoute'
import Home from './Home';

// const App = () => {
//   return (
//     <div className = "container d-flex justify-content-center p-3">
//       <Login>
//       </Login>
//     </div>
//   );
// }

const App = () => {
  return (
    <BrowserRouter>
      <div className="container d-flex justify-content-center p-3">
        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route>
            <PrivateRoute exact path='/'>
              <Home />
            </PrivateRoute>
          </Route>
          <Redirect exact to="/"/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
