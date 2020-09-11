import React from 'react';
import PropTypes from "prop-types";


function Keg(props) {
  function handleUpdateClick() {
    props.onUpdateClick(props.kegId);
  }

  // function handleDeleteClick() {
  //   props.onDeleteClick(props.kegId);
  // }
  return (
    <React.Fragment>
      <h3>{props.name} from {props.origin}</h3>
      <p>{props.brand}</p>
      <p>{props.price}</p>
      <button onClick={handleUpdateClick}>Update</button>
      {/* <button onClick={handleDeleteClick}>Delete</button> */}
      <hr/>
    </React.Fragment>
  );

}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string,
  price: PropTypes.number.isRequired,
  origin: PropTypes.string.isRequired,
  onUpdateClick: PropTypes.func
  // onDeleteClick: PropTypes.func
};

export default Keg;