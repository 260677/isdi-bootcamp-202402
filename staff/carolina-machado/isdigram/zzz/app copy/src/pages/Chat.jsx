import React, { Component } from 'react'; // Import React and Component
import { showFeedback } from '../utils'; // Import showFeedback from utils
import logic from '../logic.mjs'; // Import logic from logic.mjs
import MessageForm from '../../components/MessageForm'; // Import MessageForm
import MessageList from '../../components/MessageList';

class Chat extends Component {
    constructor() {
        super();

        try {
            const users = logic.retrieveUsersWithStatus();
            const user = logic.retrieveUser();

            this.user = user;
            this.users = users;
            this.state = {
                users,
                view: null,
                showMessageForm: false, // Add this line
            };
        } catch (error) {
            showFeedback(error);
        }
    }

    onUserClick = () => {
        this.setState((prevState) => ({
            view: prevState.view === 'message-form' ? null : 'message-form',
            showMessageForm: !prevState.showMessageForm,
        }));
    };

    render() {
        return (
            <main className="chat">
                <h1>Hello, {this.user.name}!</h1>

                <nav>
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            this.props.onHomeClick();
                        }}
                    >
                        🏡
                    </button>
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            logic.logoutUser();
                            this.props.onLogoutChatClick();
                        }}
                    >
                        🚪
                    </button>
                </nav>

                <section>
                    <ul>
                        {this.state.users.map((user) => {
                            const listItemClass =
                                user.status === 'online'
                                    ? 'user-list__item--online'
                                    : 'user-list__item--offline';

                            return (
                                <li
                                    key={user.id}
                                    className={listItemClass}
                                    onClick={this.onUserClick}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {user.username}
                                </li>
                            );
                        })}
                    </ul>
                    {this.state.showMessageForm && <MessageForm />} {/* Show MessageForm if showMessageForm is true */}
                </section>
            </main>
        );
    }
}

export default Chat // Export Chat component as default