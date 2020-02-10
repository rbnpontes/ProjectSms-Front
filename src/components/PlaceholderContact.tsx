import React from 'react';

export class PlaceholderMessage extends React.Component{
    render(){
        return (
            <div className="placeholder">
                <div className="d-flex">
                    <div className="profile-img"></div>
                    <div className="col mx-0">
                        John Doe
                    </div>
                    <div className="col-1">

                    </div>
                </div>
            </div>
        );
    }
}
export default class PlaceholderContact extends React.Component{
    render(){
        return <></>;
    }
}