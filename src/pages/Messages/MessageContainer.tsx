import React from 'react';
import '../../assets/pages/Messages/MessageContainer.scss';
export default class MessageContainer extends React.Component{
    render() {
        return (
            <div className="message-container h-100 d-flex w-100 flex-column">
                <div className="messages-field flex-grow-1"></div>
                <div className="message-input d-flex w-100">
                    <div className="col px-0 pr-2 d-flex align-items-center">
                        <input type="text" className="w-100 msg-input" />
                    </div>
                    <div>
                        <button className="send-btn">
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}