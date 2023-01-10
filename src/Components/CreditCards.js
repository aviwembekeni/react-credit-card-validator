import { Row, Col } from 'react-bootstrap';
import CreditCard from './CreditCard';

function CreditCards(props) {
    const { creditCards } = props;

    return (
        <Row xs={1} md={3} className="g-4">
            {
                creditCards.map((creditCard, i)=> (
                    <Col align="center" key={i}>
                        <CreditCard creditCardInfo={creditCard}/>
                    </Col>
                ))
            }
        </Row>

    )
}

export default CreditCards;