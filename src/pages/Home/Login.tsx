import React from 'react';
import { Redirect } from 'react-router-dom';
import { threadId } from 'worker_threads';
import AuthService from '../../services/AuthService';
function SignUpField() {
    let [redirect, setRedirect] = React.useState(false);
    return (
        <>
            <button onClick={() => setRedirect(true)} className="w-100 btn-outline">Sign Up</button>
            {redirect ? <Redirect to={'/sign-up'} /> : <></>}
        </>
    );
}
export default class Login extends React.Component {
    private tryLogin(){
        AuthService.instance.authenticated = true;
        // Refresh Page
        window.location.reload();
    }
    public render() {
        return (
            <div className="login-field">
                <div className="title">
                    Sign In
                </div>
                <form onSubmit={(e)=> {e.preventDefault();this.tryLogin()}}>
                    <div className="pt-2 form-fields">
                        <div className="form-group">
                            <small><label htmlFor="username-field">Username: </label></small>
                            <input type="text" className="form-control" id="username-field" />
                        </div>
                        <div className="form-group">
                            <small><label htmlFor="password-field">Password: </label></small>
                            <input type="password" className="form-control" id="password-field" />
                        </div>
                        <div className="form-check pt-2 pl-4">
                            <input type="checkbox" className="form-check-input" id="remember-me-field" />
                            <small><label htmlFor="remember-me-field">Remember-Me</label></small>
                        </div>
                        <button className="w-100 btn-success mb-2">
                            SIGN IN
                        </button>
                        <SignUpField />
                    </div>
                </form>
            </div>
        );
    }
}