 import {Container} from 'react-bootstrap';

import './App.css';
import Regester from './components/Regester';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
<Regester/>
      </Container>
      
    </div>
  );
}

export default App;
