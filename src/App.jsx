import React from 'react';
import Main from './components/Main';
import Button from './components/Button';
import { Textfield, Checkbox } from './components/Input';

function App() {
  return (
    <Main className="App">
      <h2>Inputs</h2>
      <div style={{
        display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '90vw',
      }}
      >
        <h4>Botones</h4>
        <Button round>OK</Button>
        <Button>OK</Button>
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '90vw',
      }}
      >
        <h4>Textfields</h4>
        <Textfield />
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '90vw',
      }}
      >
        <h4>Checkbox / Radio Button</h4>
        <Checkbox />
      </div>
    </Main>
  );
}

export default App;
