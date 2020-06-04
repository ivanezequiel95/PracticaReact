import React, { useState, useEffect } from 'react'
import { useHistory, BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom'
import * as AuthService from './authentication/AuthService'

const Home = () => {
    let history = useHistory();

    const [userName, setUserName] = useState();

    useEffect(() => {
        setUserName(AuthService.getUser())
    }, []);

    const handleLogout = () => {
        AuthService.logout();
        history.replace('/login')
    }

    return (
        <div className="w-50">
            <h2>Bienvenido {userName}</h2>
            <BrowserRouter>
                <div>
                    <Link to='/'>Home</Link>
                    -<Link to='/pokemons'>Pokemons</Link>
                    -<Link to='/trainers'>Trainers</Link>
                </div>
                <Switch>
                    <Route exact path='/'>
                        ¡Bienvenidos al Taller de React!
                </Route>
                    <Route exact path='/pokemons'>
                        Pokemons View
                </Route>
                    <Route exact path='/trainers'>
                        Trainers View
                </Route>
                    <Redirect to='/'></Redirect>
                </Switch>
            </BrowserRouter>
            <div>
                <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Home;