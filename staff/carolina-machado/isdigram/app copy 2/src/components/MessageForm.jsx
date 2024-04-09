import React, { Component } from 'react';
import { showFeedback } from '../utils';
import logic from '../logic.mjs';
import SubmitButton from '../components/library/SubmitButton'
import Chat from '../pages/Chat';
//import MessageList from './MessageList';

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = { view: null };
    }

    onSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const text = form.text.value;

        try {
            logic.sendMessageToUser(this.props.userId, text);
            form.reset();
            this.props.onSendMessageCallback();
        } catch (error) {
            showFeedback(error);
        }
    };

    render() {
        return (
            <section className="message-form">
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="text">Text</label>
                    <input id="text" type="text" />
                    <SubmitButton>Send!</SubmitButton>
                </form>
            </section>
        );
    }

    onSendMessage(callback) {
        if (typeof callback !== 'function') {
            throw new TypeError('callback is not a function');
        }
        this._onSendMessageCallback = callback;
    }
}

export default MessageForm;