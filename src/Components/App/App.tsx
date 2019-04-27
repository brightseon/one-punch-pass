import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../Router/Home';

const App = () => (
    <Switch>
        <Route path="/" exact component={ Home } />
    </Switch>
);

export default App;