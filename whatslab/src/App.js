import React from "react";
import Inputs from './components/Inputs/Inputs'
import styled from "styled-components"

const DivBody = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    position: absolute;
    bottom: 0;
    background-color: antiquewhite;
    justify-content: space-evenly;
`;
class App extends React.Component {
  render(){
    return (
      <DivBody>
        <h1>WhatsApp</h1>
      
        <Inputs />
        
      </DivBody>
      
    );
  }
}

export default App;
