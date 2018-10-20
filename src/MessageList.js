import React, {Component} from 'react';
import PropTypes from 'prop-types';


class MessageList extends Component{

    render(){
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

MessageList.propTypes = {
    messages: PropTypes.array.isRequired,
  };

export default MessageList;