import React, {Component} from 'react';

class MessageList extends Component{

    render(){
        console.log(this.props);
        return(
            <ul className="message-list">
                {this.props.messages.map((message, index) => (
                    <li key={index} className={message.username === this.props.users.username ? 'message sender' : 'message recipient'}>
                        <p>{`${message.username}: ${message.text}`}</p>
                    </li>
                ))}
            </ul>        
        );
    }

}

export default MessageList;