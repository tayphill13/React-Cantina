import React from 'react';
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';

function Keg(props) {
  return (
    <Card onLinkClick={()=>props.onKegClick(props.id)}>
      <Card.Header as='h4'>{props.name}</Card.Header>
      <Card.Body>
        <Card.Text as='h5'>{props.origin}</Card.Text>
        <Card.Text>{props.pintsRemaining} pints remaining</Card.Text>
        <Card.Text>${props.price}</Card.Text>
        <Card.Text>{props.brand}</Card.Text>
      </Card.Body>
    </Card>
  )
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string,
  price: PropTypes.number.isRequired,
  origin: PropTypes.string.isRequired,
  pintsRemaining: PropTypes.number.isRequired,
  id: PropTypes.string,
  onLinkClick: PropTypes.func,
  onKegClick: PropTypes.func
};

export default Keg;