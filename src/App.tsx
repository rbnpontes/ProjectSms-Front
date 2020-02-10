import React from 'react'
import { Switch, Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import AuthService from './services/AuthService';
import Main from './pages/Main';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

function AppRouter() {
    return (
        <Router history={history}>
            <Switch>
                <Route path={'/'}>
                    {AuthService.instance.authenticated ? <Main /> : <Home />}
                </Route>
            </Switch>
        </Router>
    );
}
export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <AppRouter />
            </div>
        );
    }
}