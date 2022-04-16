import React from 'react'
import CurrentUserMessages from './CurrentUserMessages';
import ForginUsersMessages from './ForginUsersMessages';
import NewMessageForm from './NewMessageForm';
import './ChatMessages.css';

export default function ChatMessages(props) {

    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderMessagesToRead = (message, isUserMessage) => chat.people.map((person, index) => person.last_read === message.id && (
        <div
            key={index}
            style={{
                float: isUserMessage ? 'right' : 'left',
                backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
            }}
        ></div>
    ))

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key]
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isUserMessage = userName === message.sender.username;


            return (
                <div key={index} style={{ width: '100%' }}>
                    <div className="messages-container">
                        {isUserMessage
                            ? <CurrentUserMessages message={message} />
                            : <ForginUsersMessages message={message} lastMessage={messages[lastMessageKey]} />
                        }
                        <div className={isUserMessage ? `userMessageBox` : `forginUserMessageBox`} >
                            {renderMessagesToRead(message, isUserMessage)}
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="chat-container">
            <div className="chat-title">{chat && chat.title}</div>
            {renderMessages()}
            <br />
            <br />
            <br />
            <div className="message-form-container">
                <NewMessageForm {...props} chatID={activeChat} />
            </div>
        </div>
    )
}
