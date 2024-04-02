import React, { Component } from 'react';
import utils from '../utils.mjs';
import logic from '../logic.mjs';

class MessageList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
        };

        this._userId = props.userId;
        this._refreshIntervalId = null;

        this.refresh();
        this.startAutoRefresh();
    }

    componentWillUnmount() {
        this.stopAutoRefresh();
    }

    refresh() {
        try {
            const messages = logic.retrieveMessagesWithUser(this._userId);
            this.setState({ messages });
        } catch (error) {
            utils.showFeedback(error);
        }
    }

    startAutoRefresh() {
        this._refreshIntervalId = setInterval(() => {
            if (MessageList.active) {
                console.count('message-list refresh');
                this.refresh();
            }
        }, 1000);
    }

    stopAutoRefresh() {
        clearInterval(this._refreshIntervalId);
    }

    render() {
        return (
            <ul className="message-list">
                {this.state.messages.map((message, index) => (
                    <li
                        key={index}
                        className={`message-list__item ${
                            message.from === logic.getLoggedInUserId()
                                ? 'message-list__item--right'
                                : 'message-list__item--left'
                        }`}
                    >
                        {message.text}
                    </li>
                ))}
            </ul>
        );
    }
}

MessageList.active = false;

export default MessageList;