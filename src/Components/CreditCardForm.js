import React, { useState, useContext } from 'react';
import { Form, Alert } from 'react-bootstrap';
import isCreditCardValid from '../functions/isCreditCardValid';
import countries from '../countries.json';
import CreditCards from  './CreditCards';
import { BannedCountriesContext } from '../BannedCountriesContext'

function CreditCardForm() {
  const [ country, setCountry ] = useState({});
  const [ cardNumber, setCardNumber ] = useState(null);
  const [ creditCards, setCreditCards ] = useState([]);
  const [ isBannedCountry, setBannedCountry ] = useState(false);
  const [ isError, setError ] = useState(false);
  const bannedCountries = useContext(BannedCountriesContext);

  const handleSubmit=(e)=>{
    e.preventDefault();
    const existingCCard = creditCards.find(ccard => ccard.cardNumber === cardNumber);
    console.log('Existing c ', existingCCard);
    if(existingCCard === undefined && isCreditCardValid(cardNumber)){
        setCreditCards([
          ...creditCards,
          {
            cardNumber,
            country
          }
        ]);
    } else {
        setError(true);
    }
 }

 const handleCountry = (e) => {
  const selectedCountryId = e.target.value;
  const selectedCountry = countries.find(country => country.country_id === selectedCountryId);
  const bannedCountry = bannedCountries.items.find(country => country.country_id === selectedCountryId);
  if(bannedCountry) {
    setBannedCountry(true);
  } else {
    setCountry(selectedCountry);
  }
  
}

  if(isError) return (
      <Alert variant="danger" onClose={() => setError(false)} dismissible>
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        It's either your card number is invalid or alredy exists
      </p>
    </Alert>
  )


  if(isBannedCountry) return (
      <Alert variant="danger" onClose={() => setBannedCountry(false)} dismissible>
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        The country you selected is banned
      </p>
    </Alert>
  )

  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <h3 className='mt-3'>Fill in your card details below.</h3>
          <Form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-12">
              <label  className="form-label"> Country</label>            
                  <div className="text-dark"> 
                    <Form.Select aria-label="Default select example" onChange={(e)=> handleCountry(e)}>
                      <option value="">--Select Country--</option>
                      {
                      countries.map((country ,i)=>(
                        <option value={country.country_id} key={i}>{country.country_name}</option> 
                      ))
                      }
                    </Form.Select>           
                  </div>
            </div>
            <div className="col-md-12">
              <label  className="form-label"> Card Number</label>            
                  <div className="text-dark"> 
                  <Form.Control type="text" placeholder="Enter Card number" onChange={(e) => setCardNumber(e.target.value)}/>       
                  </div>
            </div>
            <div className="col-md-12">
                  <div className="text-dark"> 
                    <button name='submit' className='btn btn-success'>Submit</button>
                  </div>
            </div>
          </Form>
        </div>
      </div>
      <div className="row g3">
      <CreditCards creditCards={creditCards}/>
      </div>
    </div>
  );
}

export default CreditCardForm;
