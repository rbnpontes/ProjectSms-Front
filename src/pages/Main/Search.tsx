import React from 'react';
export default class Search extends React.Component {
    render() {
        return (
            <div className="search-field">
                <div className="search-input d-flex">
                    <div className="search-ic">
                        <i className="fas fa-search"></i>
                    </div>
                    <input type="text" className="w-100" placeholder="Search a Message"/>
                </div>
            </div>
        );
    }
}