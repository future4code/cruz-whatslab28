import React from 'react'
import './Inputs.css'

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
            userName: this.state.valueUserName,
            userMessage: this.state.valueUserMessage,
        };
        this.setState({ 
            message: [...this.state.message, newMsg] 
        });
    };
        render() {
        const msgList = this.state.message.map((message) => {
        return (
            <p>
                {message.userName} : {message.userMessage}
            </p>
            
            );
            
        });
        return(
            <div>
                <div>{msgList}</div>
                <div>
                    <input 
                        value={this.state.valueUserName}
                        onChange={this.handleUser}
                        placeholder={'Quem é Você?'}
                    />
                    <input 
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