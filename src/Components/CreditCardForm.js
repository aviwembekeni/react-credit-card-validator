import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import isCreditCardValid from '../Functions/isCreditCardValid';
import countries from '../countries.json';

function CreditCardForm() {
  const [ country, setCoutry ] = useState({});
  const [ cardNumber, setCardNumber ] = useState(null);
  const [ isError, setError ] = useState(false);

  const handleCountry = (e) => {
    const selectedCountryId = e.target.value;
    const selectedCountry = countries.find(country => country.country_id === selectedCountryId);
    console.log(selectedCountry);
    setCoutry(selectedCountry);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(country);
    console.log(cardNumber);
    if(isCreditCardValid(cardNumber)){
        setCardNumber(cardNumber);
        alert("Get credit card valid: "+cardNumber);
    } else {
        setError(true);
    }
 }

    if(isError) return (
        <Alert variant="danger" onClose={() => setError(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Please check your card number again
        </p>
      </Alert>
    )

 

  return (
      <div className="row">
        <div className="col-sm-6">
          <h3 className='mt-3'>Fill in your card details below.</h3>
          <Form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-12">
              <label  className="form-label"> Country</label>            
                  <div className="text-dark"> 
                    <Form.Select aria-label="Default select example" onChange={(e)=>handleCountry(e)}>
                      <option value="">--Select Country--</option>
                      {
                      countries.map( (getcountry,index)=>(
                        <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option> 
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
            <div className="col-md-">
                  <div className="text-dark"> 
                    <button name='submit' className='btn btn-success'>Submit</button>
                  </div>
            </div>
          </Form>
        </div>
      </div>
  );
}

export default CreditCardForm;
