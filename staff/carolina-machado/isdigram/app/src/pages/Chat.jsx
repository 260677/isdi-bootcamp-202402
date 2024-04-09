import React, { useState } from 'react'; // Import React and useState
import MessageForm from '../components/MessageForm'; // Import MessageForm
import logic from '../logic'; // Import your logic module
import { showFeedback } from '../utils'; // Import showFeedback

function Chat(props) {
    const [view, setView] = useState(null);
    const [users, setUsers] = useState(null);
    const [user, setUser] = useState(null);
    const [showMessageForm, setShowMessageForm] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await logic.retrieveUser();
                setUsers(users);
            } catch (error) {
                showFeedback(error);
            }
        };

        fetchUsers();
    }, []);

    const onUserClick = () => {
        setView((prevState) => ({
            view: prevState.view === 'message-form' ? null : 'message-form',
            showMessageForm: !prevState.showMessageForm,
        }));
    };

    return (
        <main className="chat">
            {user && <h1>Hello, {user.name}!</h1>}

            <nav>
                <button
                    onClick={(event) => {
                        event.preventDefault();
                        props.onHomeClick();
                    }}
                >
                    🏡
                </button>
                <button
                    onClick={(event) => {
                        event.preventDefault();
                        logic.logoutUser();
                        props.onLogoutChatClick();
                    }}
                >
                    🚪
                </button>
            </nav>

            <section>
                <ul>
                    {users.map((userItem) => {
                        const listItemClass =
                            userItem.status === 'online'
                                ? 'user-list__item--online'
                                : 'user-list__item--offline';

                        return (
                            <li key={userItem.id} className={listItemClass}>
                                {/* Render user details */}
                            </li>
                        );
                    })}
                </ul>
            </section>
        </main>
    );
}


export default Chat


