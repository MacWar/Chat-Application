import React, { useRef } from 'react'
import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import './NewMessageForm.css';

export default function NewMessageForm(props) {

    const [message, setMessage] = useState('');
    const { chatID, creds } = props;
    const ref = useRef(null);

    const handleMessageInputOnChange = (event) => {
        setMessage(event.target.value);
        isTyping(props, chatID);
    };

    const handleSendMessage = (event) => {
        event.preventDefault();
        const text = message.trim();
        message.length > 0 && sendMessage(creds, chatID, { text });
        setMessage("");
        ref.current.value = "";
    }

    const handleUploadImage = (event) => {
        sendMessage(creds, chatID, { files: event.target.files, text: '' });
    }

    const handleSendImage = () => {
        ref.current.click();
    }
    return (
        <form onSubmit={handleSendMessage} className="new-message-form">
            <input className='new-message-input' name='messageInput' placeholder='message...' value={message} onChange={handleMessageInputOnChange} />
            <input ref={ref} className='file-input' type="file" multiple={false} onChange={handleUploadImage}></input>
            <button className='send-picture' onClick={handleSendImage}>Send picture</button>
            <button className='send-message'> SEND </button>
        </form>

    )
}
