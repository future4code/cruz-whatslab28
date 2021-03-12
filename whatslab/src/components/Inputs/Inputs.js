import React from 'react'
import Inputs from './Inputs.css'
import styled from 'styled-components'
import App from '../../App';

class Inputs extends React.Component {
    state = {
        mensage: [],
        userName: "",
        userMessage: "",
    };
}

handleUsuario = (event) => {
    this.setState({ userName: event.target.value });
};

handleMensagem = (event) => {
    this.setState({ userMessage: event.target.value });
};

sendMessage = () => {
    const newMsg = {
        userName: this.state.userName,
        userMesage: this.state.userMessage,
    };
    this.setState({ 
        message: [...this.state.message, newMsg] 
    });
};
    render() {
    const msgList = this.state.message.map((msg, index) => {
    return (
        key={index}
        userName={msg.userName}
        userMessage={msg.userMessage}
        );
    });
}

export default Inputs;
export deafult App