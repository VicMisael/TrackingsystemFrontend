import React, {useState} from 'react';
import {BrowserRouter, Switch, Route, useParams} from 'react-router-dom'
import Home from './pages/home'
import Usuarios from './pages/usuarios';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/usuarios" exact component={Usuarios}/>
            <Route path="/" exact component={Home} />
            </Switch>
            </BrowserRouter>
    )
}