import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import CreditCardForm from './Components/CreditCardForm';

function App() {

  return (
    <div className="App">
      <Header />
      <Container className="content">
        <CreditCardForm />
      </Container>
    </div>
  );
}

export default App;
