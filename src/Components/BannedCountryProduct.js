import { Button } from 'react-bootstrap';
import { BannedCountriesContext } from '../BannedCountriesContext';
import { useContext } from 'react';

function BannedCountryProduct(props) {
    const bannedCountries = useContext(BannedCountriesContext);
    const { country } = props;

    return (
        <>
            <h5>{country.country_name}</h5>
            <p>{country.sortname}</p>
            <Button size="sm" onClick={()=> bannedCountries.removeOneFromBannedCountries(country.country_id)}>Remove</Button>
            <hr/>
        </>
    )

}

export default BannedCountryProduct;