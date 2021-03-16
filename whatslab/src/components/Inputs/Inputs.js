import React from 'react';
import styled from "styled-components"

const AppBox = styled.div`
    border: 3px solid black;
    height: 100vh;
    box-sizing: border-box;
    width: 40%;
    margin: auto;
    display: flex;
    flex-direction: column;
`

const DialogueContainer = styled.div`
    flex-grow: 1;
    padding: 16px;
    display: flex;
    flex-direction: column-reverse;
    background-color: lightgreen;
`

const InputsContainer = styled.div`
    display: flex;
`

const NameInput = styled.input`
    width: 100px;
    height: 30px;
    border: 1px solid black;
    margin-right: 2px;
`

const MessageInput = styled.input`
    flex-grow: 1;
    border: 1px solid black;
    margin-right: 2px;
`
const SendButton = styled.button`
    font-weight: bold;
    background-color: darkgrey;

`
class Inputs extends React.Component {
    state = {
        message: [],
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
        return (
        <AppBox>
        <DialogueContainer>
            {this.state.message.map((message, index) => {
            return <p key={index}>
                <strong>{message.userName}</strong> {message.userMessage}
            </p>
            })}
        </DialogueContainer>
        <InputsContainer>
            <NameInput
            value={this.state.valueUserName }
            onChange={this.handleUser }
            placeholder={'Quem é Você?'}
            />
            <MessageInput
            value={this.state.valueUserMessage}
            onChange={this.handleMensagem}
            placeholder={'Vamos fofocar!?'}
            />
            <SendButton onClick={this.sendMessage}>Enviar</SendButton>
        </InputsContainer>
        </AppBox>
        );
    }
}


export default Inputs;