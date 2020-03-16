import React from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../services/AuthService';
export default class Register extends React.Component {
    private tryRegister(){
        AuthService.instance.authenticated = true;
        window.location.reload();
    }
    public render() {
        return (
            <div className="register-field">
                <div className="title d-flex">
                    <div>
                        <Link to='/sign-in' className="back-ic">
                            <i className="fas fa-arrow-left"></i>
                        </Link>
                    </div>
                    <div className="col">
                        Sign Up
                    </div>
                </div>
                <form onSubmit={(e)=> {e.preventDefault(); this.tryRegister();}}>
                    <div className="pt-2 form-fields">
                        <div className="form-group">
                            <small><label>Name:</label></small>
                            <input type="text" className="form-control" name="name" id="name-field" />
                        </div>
                        <div className="form-group">
                            <small><label htmlFor="username-field">Username:</label></small>
                            <input type="text" className="form-control" name="username" id="username-field" />
                        </div>
                        <div className="form-group">
                            <small><label htmlFor="username-field">E-mail:</label></small>
                            <input type="email" className="form-control" name="email" id="email-field" />
                        </div>
                        <div className="form-group">
                            <small><label htmlFor="password-field">Password:</label></small>
                            <input type="password" className="form-control" name="password" id="password-field" />
                        </div>
                        <div className="form-group">
                            <small><label htmlFor="repeat-pass-field">Repeat Password:</label></small>
                            <input type="password" className="form-control" id="repeat-pass-field" autoComplete="off"/>
                        </div>
                        <div className="form-check pt-2 pl-4">
                            <input type="checkbox" className="form-check-input" id="terms-field" />
                            <small><label htmlFor="terms-field">Accept terms of Service</label></small>
                        </div>
                        <button className="w-100 btn-success mb-2">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}