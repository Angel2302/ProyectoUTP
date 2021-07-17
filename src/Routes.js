import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './Login';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/login"><Login /></Route>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;