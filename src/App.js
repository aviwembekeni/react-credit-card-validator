import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import CreditCardForm from './components/CreditCardForm';
import BannedCountriesProvider from './BannedCountriesContext';

function App() {

  return (
    <BannedCountriesProvider>
      <Container>
        <Header />
        <CreditCardForm />
      </Container>
    </BannedCountriesProvider>
  );
}

export default App;
