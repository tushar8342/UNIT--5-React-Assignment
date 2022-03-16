import logo from './logo.svg';
import './App.css';
import { Button } from './componentes/Button';
import { Wrapper } from './componentes/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Button background='teal' color='white'>Primery Button</Button>
        <Button>Default Button</Button>
        <Button>Dashed Button</Button>
        <Button background='white' border='1px solid transparent'>Taxt Button</Button>
        <Button background='white' color='blue' border='transparent'>Link Button</Button>
      </Wrapper>
    </div>
  );
}
export default App;
