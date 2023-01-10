import { Card } from 'react-bootstrap';

function CreditCard(props) {
    const { creditCardInfo } = props;
    return(
        <Card>
            <Card.Body>
                <Card.Title>{ creditCardInfo.cardNumber }</Card.Title>
                <Card.Text> { creditCardInfo.country.country_name } </Card.Text>
            </Card.Body>
        </Card>

    )
}

export default CreditCard;