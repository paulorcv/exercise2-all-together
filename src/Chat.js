import React, {Component} from 'react';
import MessageList from './MessageList';
import ChatForm from './ChatForm';

const messages = [
    { username: 'Amy', text: 'Hi, Jon!' },
    { username: 'Amy', text: 'How are you?' },
    { username: 'John', text: 'Hi, Amy! Good, you?' },
];


class Chat extends Component{

    constructor(props){
        super(props);    
        this.updateMessage = this.updateMessage.bind(this);    
    }

    updateMessage = (message) => {
        this.props.addMessage(message);11
    }

    render(){
        return(
        <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.user.username}</div>

            <MessageList messages={this.props.messages} users={this.props.user} />  
            <ChatForm updateMessage={this.updateMessage} user={this.props.user}/>    
        </div>
        );
    }
}


export default Chat;