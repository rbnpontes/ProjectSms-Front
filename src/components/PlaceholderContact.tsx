import React from 'react';
import '../assets/components/PlaceholderContact.scss';
export class PlaceholderMessage extends React.Component {
    render() {
        return (
            <div className="placeholder">
                <div className="d-flex">
                    <div className="profile-img"></div>
                    <div className="col pr-0 pl-2 d-flex align-items-center contact-field">
                        <section>
                            <div className="contact-name"><b>John Doe</b></div>
                            <div className="contact-message">Lorem Ipsum Dollor sit Amet</div>
                        </section>
                    </div>
                    <div className="d-flex justify-content-center">
                        <section>
                            <small>Yesterday</small>
                            <div className="text-center menu-options">
                                <i className="fas fa-chevron-down"></i>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}
export default class PlaceholderContact extends React.Component {
    render() {
        return <></>;
    }
}