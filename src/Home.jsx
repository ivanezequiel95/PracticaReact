import React, { useState, useEffect } from 'react';
import { useHistory, BrowserRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import * as AuthService from './authentication/AuthService';
import PokemonsView from './Pokemons/PokemonsView';
import TrainersView from './Trainers/TrainersView';

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
        <>
            <BrowserRouter>
                <div className="container">
                    <Navbar>
                        <Navbar.Brand as={NavLink} to="/">
                            Bienvenido {userName}
                        </Navbar.Brand>
                        <Nav>
                            <Nav.Link as={NavLink} to="/" exact>
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/pokemons">
                                Pokemons
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/trainers">
                                Trainers
                            </Nav.Link>
                        </Nav>
                        <Navbar.Collapse className="justify-content-end">
                            <button className="btn btn-primary justify-content-end" type="button" onClick={handleLogout}>Logout</button>
                        </Navbar.Collapse>
                    </Navbar>
                    <Switch>
                        <div className="container-md">
                            <Route exact path='/'>
                                ¡Bienvenidos al Taller de React!
                            </Route>
                            <Route exact path='/pokemons' component={PokemonsView} />
                            <Route exact path='/trainers' component={TrainersView} />
                        </div>
                        <Redirect exact to="/"/>
                    </Switch>
                </div>
            </BrowserRouter>
        </>
    )
}

export default Home;