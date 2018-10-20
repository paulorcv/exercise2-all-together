import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ChatForm extends Component{

    /*
    If the user did not type anything, he/she should not be
    allowed to submit.
    */
    isDisabled = () => {
        return this.state.text.trim() === '';
    };  

    handleChange = (event) => {
        this.setState({text: event.target.value});
    }

    constructor(props){
        super(props);
        this.sendMessage = this.sendMessage.bind(this);        
    }
    
    state = {
        text: '',       
    }

    sendMessage = (event) =>{
        event.preventDefault();
        this.props.updateMessage({username: this.props.user.username, text: this.state.text})

    }

    render(){
        return(
           <div className='ChatForm'>
                <form className="input-group" onSubmit={this.sendMessage}>
                    <input type="text" className="form-control" onChange={this.handleChange} placeholder="Enter your message..." />
                    <div className="input-group-append">
                        <button className="btn submit-button" disabled={this.isDisabled()}>
                            SEND
                  </button>
                    </div>
                </form>
            </div>
        );
    }

}

ChatForm.propTypes = {
    updateMessage: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };


export default ChatForm;