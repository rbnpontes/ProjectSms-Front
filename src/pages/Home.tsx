import React from 'react';
import '../assets/pages/Home.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Home/Login';
import Register from './Home/Register';
function HomeRouter() {
    return (
        <Switch>
            <Route path='/' exact>
                <Redirect to={'/sign-in'}/>
            </Route>
            <Route path='/sign-in'>
                <Login />
            </Route>
            <Route path='/sign-up'>
                <Register />
            </Route>
        </Switch>
    );

}
export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <section>
                    <div className="home-logo"></div>
                    <div className="home-box">
                        <HomeRouter />
                    </div>
                </section>
            </div>
        );
    }
}