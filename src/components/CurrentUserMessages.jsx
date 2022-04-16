import React from 'react';
import './CurrentUserMessages.css';

export default function CurrentUserMessages(props) {

    if (props.message.attachments && props.message.attachments.length > 0) {
        return (
            <img className="message-image" src={props.message.attachments[0].file} alt="message-attachment" />
        )
    }
    else
        return (
            <div className="message">
                {props.message.text}
            </div>
        )
}
