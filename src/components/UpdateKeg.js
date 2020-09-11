import React from 'react';
import PropTypes from 'prop-types';
import KegForm from './KegForm';

function UpdateKeg(props) {
  const { keg, onClick, onUpdateKeg } = props;

  function handleUpdateKeg(event) {
    onUpdateKeg({
      name: event.target.name.value,
      price: event.target.price.value,
      brand: event.target.brand.value,
      origin: event.target.origin.value,
      id: keg.id
    });
  }

  return (
    <KegForm
      onClick={onClick}
      onSubmittingForm={handleUpdateKeg}
      buttonText="Edit Keg"
      defautlName={keg.name}
      defaultPrice={keg.price}
      defaultBrand={keg.brand}
      defaultOrigin={keg.origin} />
  )
}

UpdateKeg.propTypes = {
  keg: PropTypes.object,
  onClick: PropTypes.func,
  onUpdateKeg: PropTypes.func
}

export default UpdateKeg;