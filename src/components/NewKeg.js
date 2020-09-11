import React from 'react';
import PropTypes from 'prop-types';
import v1 from 'uuid';
import KegForm from './KegForm';

function AddKeg(props) {
  function handleAddingNewKeg(event) {
    props.onAddingKeg({
      name: event.target.name.value,
      price: event.target.price.value,
      brand: event.target.brand.value,
      origin: event.target.origin.value,
      pintsRemaining: event.target.pintsRemaining.value,
      id: v1()
    })
  }

  return (
      <KegForm
        onClick={props.OnClick}
        onSubmittingForm={handleAddingNewKeg}
        buttonText="Add this Keg" />
  )
}

AddKeg.propTypes = {
  onClick: PropTypes.func,
  onAddingKeg: PropTypes.func
}

export default AddKeg;