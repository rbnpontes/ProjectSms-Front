import React from 'react';
import '../../assets/pages/Main/NavHeaders.scss';
import { MenuDropdown, MenuItem } from '../../components/MenuDropdown';
import AuthService from '../../services/AuthService';
export class MainLeftNav extends React.Component {
    public state = {
        menuOptions: false
    };
    private tryShowMenuOptions() {
        this.setState({ menuOptions: true });
    }
    private tryCloseMenuOptions() {
        this.setState({ menuOptions: false });
    }
    private trySignOut(){
        AuthService.instance.authenticated = false;
        window.location.reload();
    }
    render() {
        let menuOptions = <></>;
        if (this.state.menuOptions) {
            menuOptions = (
                <MenuDropdown onClose={()=> this.tryCloseMenuOptions()}>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>Help</MenuItem>
                    <MenuItem onClick={()=> this.trySignOut()}>Sign Out</MenuItem>
                </MenuDropdown>
            );
        }
        return (
            <div className="nav-headers row mx-0 left-nav">
                <div className="nav-btn ml-0">
                    <button>
                        <i className="fas fa-user-circle"></i>
                    </button>
                </div>
                <div className="col px-0"></div>
                <div className="nav-btn">
                    <button className="story-ic"></button>
                </div>
                <div className="nav-btn">
                    <button>
                        <i className="fas fa-comment-alt"></i>
                    </button>
                </div>
                <div className="nav-btn">
                    <button onClick={() => this.tryShowMenuOptions()}>
                        <i className="fas fa-ellipsis-v"></i>
                    </button>
                    {menuOptions}
                </div>
            </div>
        );
    }
}
export class MainRightNav extends React.Component {
    render() {
        return (
            <div className="d-flex right-nav h-100">
                <div className="col px-0"></div>
                <div className="nav-btn">
                    <i className="fas fa-ellipsis-v"></i>
                </div>
            </div>
        );
    }
}