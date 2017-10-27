import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import ShowStuff from './pages/showStuff/ShowStuff';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/show-stuff' component={ShowStuff} />
    </Switch>
)