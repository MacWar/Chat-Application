import React from 'react';
import './ForginUsersMessages.css';

export default function ForginUsersMessages(props) {

    return (
        <div className="message-row">
            {props.message.attachments && props.message.attachments.length > 0
                ? (
                    <img className={`message-image`} src={props.message.attachments[0].file} alt="message-attachment" />
                )
                : (
                    <div className="message forgin-message" >
                        {props.message.text}
                    </div>
                )
            }
        </div>
    )
}
