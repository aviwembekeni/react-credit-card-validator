import React from 'react';
import { Navbar, Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { BannedCountriesContext } from '../BannedCountriesContext';
import countries from '../countries.json';
import BannedCountryProduct from './BannedCountryProduct';

function Header() {
    const [ show, setShow ] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [ country, setCountry ] = useState({});
    const bannedCountries = useContext(BannedCountriesContext);

    const handleCountry = (e) => {
        const selectedCountryId = e.target.value;
        const selectedCountry = countries.find(country => country.country_id === selectedCountryId);
        setCountry(selectedCountry);
    }

    return(
        <>
            <Navbar expand="sm">
                <Navbar.Brand href="/">Credit Card Validator</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end" >
                    <Button onClick={handleShow}> { bannedCountries.items.length } Banned Countries </Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose} scrollable={true}>
                <Modal.Header closeButton>
                    <Modal.Title> { bannedCountries.items.length } Banned Countries </Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    {
                        bannedCountries.items.length > 0 ?
                            <Row xs={1} md={1} className="g-4">
                                {
                                    bannedCountries.items.map((country, i)=> (
                                        <Col key={i}>
                                            <BannedCountryProduct country={country} />
                                        </Col>
                                    ))
                                }  
                            
                            </Row> 
                        :
                            <h1> There are no banned countries!</h1>
                    } 
                </Modal.Body>
                <Modal.Footer>
                       {/* make this form a component and re-use */}
                       <Row xs={1} md={2} className="g-2">
                            <Col align="center">
                                <Form.Select aria-label="Default select example" onChange={(e)=> handleCountry(e)}>
                                    <option value="">--Select Country--</option>
                                        {
                                            countries.map( (getcountry,index)=>(
                                                <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option> 
                                            ))
                                        }
                                </Form.Select>           
                            </Col>
                            <Col align="center">
                                <button name='submit' className='btn btn-success' onClick={() => bannedCountries.addOneToBannedCountries(country)}>Add</button>
                            </Col>
                        </Row>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Header;
