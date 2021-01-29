import { useState } from 'react';
import Main from './components/Main';
import Button from './components/Button';
import Container from './components/Container';

function App() {
  const [isActive, setIsActive] = useState(true);

  return (
    <Main className="App">
      <Container>
        <Button round size="small">OK</Button>
        <Button round>OK</Button>
        <Button round size="large">OK</Button>
        <Button round size="large" type="switch" active={isActive} onClick={() => setIsActive(!isActive)} />
      </Container>
      <Container>
        <Button size="small">OK</Button>
        <Button>OK</Button>
        <Button size="large">OK</Button>
      </Container>
    </Main>
  );
}

export default App;
