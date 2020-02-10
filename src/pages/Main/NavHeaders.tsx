import React from 'react';
export class MainLeftNav extends React.Component {
    render() {
        return (
            <div className="row mx-0 left-nav">
                <div className="nav-btn ml-0">
                    <i className="fas fa-user-circle"></i>
                </div>
                <div className="col px-0"></div>
                <div className="nav-btn">
                    <i className="story-ic"></i>
                </div>
                <div className="nav-btn">
                    <i className="fas fa-comment-alt"></i>
                </div>
                <div className="nav-btn">
                    <i className="fas fa-ellipsis-v"></i>
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