import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    if(!props.update) {
      props.onNewKegCreation({  name: event.target.name.value,
                                brand: event.target.brand.value,
                                price: event.target.price.value,
                                origin: event.target.origin.value,
                                pintsRemaining: event.target.pintsRemaining.value,
                                id: v4()
                              });
    } else {
      props.onUpdateTicket({  name: event.target.name.value,
                              brand: event.target.brand.value,
                              price: event.target.price.value,
                              origin: event.target.origin.value,
                              id: props.kegId
      });
    }
  }

  return (
    <React.Fragment>
      <form onSubmit = {handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Beverage Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          type='number'
          name='price'
          placeholder='Price/pint' />
        <input
          type='text'
          name='origin'
          placeholder='Planet of Origin' />
        <input
          type='number'
          name="pintsRemaining"
          placeholder='Pints remaining (124)' />
        <button type='submit'>Add Keg to List</button>
      </form>
      <button onClick={props.onClick}>Back to Keg List</button>
    </React.Fragment>
  );

}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func,
  onUpdateKeg: PropTypes.func,
  onClick: PropTypes.func,
  update: PropTypes.bool
};

export default NewKegForm;