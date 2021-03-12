import React from 'react';
import styled from "styled-components"

const YourName = styled.input`
    width: 30%;
    margin-right: 10px;
`;

const YourMessage = styled.input`
    width: 0%;
    margin-right: 10px;
`;

const SendButton = styled.button`
    width: 10%;
`;

class Inputs extends React.Component {
    state = {
        message: [
            {userName: ""},
            {userMessage: ""}
        ],
        valueUserName: "",
        valueUserMessage: "",
    };


    handleUser = (event) => {
        this.setState({ valueUserName: event.target.value });
    };

    handleMensagem = (event) => {
        this.setState({ valueUserMessage: event.target.value });
    };

    sendMessage = () => {
        const newMsg = {
            userName: this.state.valueUserName + " : ",
            userMessage: this.state.valueUserMessage,
        };
        this.setState({ 
            message: [...this.state.message, newMsg],
        });
        this.setState({ valueUserName: ""});
        this.setState({ valueUserMessage: ""});
    };
        render() {
        const msgList = this.state.message.map((message) => {
        return (
            <p>
                {message.userName}{message.userMessage}
            </p>
            
            );
            
        });
        return(
            <div>
                <div>{msgList}</div>
                <div>
                    <YourName 
                        value={this.state.valueUserName }
                        onChange={this.handleUser }
                        placeholder={'Quem é Você?'}
                    />
                    <YourMessage 
                        value={this.state.valueUserMessage}
                        onChange={this.handleMensagem}
                        placeholder={'Vamos fofocar!'}
                    />
                    <button onClick={this.sendMessage}>Enviar</button>
                </div>

            </div>
        )
    }
        
}


export default Inputs;