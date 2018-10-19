import React, {Component} from 'react';
import MessageList from './MessageList';
import ChatForm from './ChatForm';

const messages = [
    { username: 'Amy', text: 'Hi, Jon!' },
    { username: 'Amy', text: 'How are you?' },
    { username: 'John', text: 'Hi, Amy! Good, you?' },
];


class Chat extends Component{



    render(){
        return(
        <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.users.username}</div>

            <MessageList messages={messages} users={this.props.users} />  
            <ChatForm />    
        </div>
        );

    }

}


export default Chat;