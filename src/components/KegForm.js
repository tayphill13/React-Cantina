import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function KegForm(props) {
  const { onClick, onSubmittingForm, buttonText, defaultName, defaultBrand, defaultPrice, defaultOrigin, defaultPintsRemaining } = props;

  function handleFormSubmission(event) {
    event.preventDefault();
    onSubmittingForm(event);
  }

  return (
    <React.Fragment>
      <Form onSubmit={handleFormSubmission}>
        <Form.Group controlId="name">
          <Form.Label>Beverage</Form.Label>
          <Form.Control type='text' placeholder="Beverage Name" defaultValue={defaultName} required />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type='text' placeholder='0.00' defaultValue={defaultPrice} pattern='^\d+\.\d{2}$' required />
          </InputGroup>
          <Form.Text className='text-muted'>Format as a decimal (e.g. 3.99 or 12.49)</Form.Text>
        </Form.Group>
        <Form.Group controlId="pintsRemaining">
          <Form.Label>Pints Remaining</Form.Label>
          <Form.Control type='number' placeholder='124' defaultValue={defaultPintsRemaining} required />
        </Form.Group>
        <Form.Group controlId="brand">
          <Form.Label>Brand</Form.Label>
          <Form.Control type='text' placeholder="Beverage Brand" defaultValue={defaultBrand} required />
        </Form.Group>
        <Form.Group controlId='origin'>
          <Form.Label>Origin</Form.Label>
          <Form.Control type='text' placeholder="Planet of Origin" defaultValue={defaultOrigin} required />
        </Form.Group>
        <Button className='mb-3' variant='success' type="submit" size='lg' >{buttonText}</Button>
      </Form>
      <Button className='mb-3' variant='secondary' type='button' size='lg' onClick={()=>onClick('list')}>Back to Keg List</Button>
    </React.Fragment>
  )
}

KegForm.propTypes = {
  onClick: PropTypes.func.isRequired,
  onSubmittingForm: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  defaultName: PropTypes.string,
  defaultPrice: PropTypes.string,
  defaultBrand: PropTypes.string,
  defaultOrigin: PropTypes.string,
  defaultPintsRemaining: PropTypes.number
}

export default KegForm;









//   function handleNewKegFormSubmission(event) {
//     event.preventDefault();
//     if(!props.update) {
//       props.onNewKegCreation({  name: event.target.name.value,
//                                 brand: event.target.brand.value,
//                                 price: event.target.price.value,
//                                 origin: event.target.origin.value,
//                                 pintsRemaining: event.target.pintsRemaining.value,
//                                 id: v4()
//                               });
//     } else {
//       props.onUpdateTicket({  name: event.target.name.value,
//                               brand: event.target.brand.value,
//                               price: event.target.price.value,
//                               origin: event.target.origin.value,
//                               id: props.kegId
//       });
//     }
//   }

//   return (
//     <React.Fragment>
//       <form onSubmit = {handleNewKegFormSubmission}>
//         <input
//           type='text'
//           name='name'
//           placeholder='Beverage Name' />
//         <input
//           type='text'
//           name='brand'
//           placeholder='Brand' />
//         <input
//           type='number'
//           name='price'
//           placeholder='Price/pint' />
//         <input
//           type='text'
//           name='origin'
//           placeholder='Planet of Origin' />
//         <input
//           type='number'
//           name="pintsRemaining"
//           placeholder='Pints remaining (124)' />
//         <button type='submit'>Add Keg to List</button>
//       </form>
//       <button onClick={props.onClick}>Back to Keg List</button>
//     </React.Fragment>
//   );

// 

// NewKegForm.propTypes = {
//   onNewKegCreation: PropTypes.func,
//   onUpdateKeg: PropTypes.func,
//   onClick: PropTypes.func,
//   update: PropTypes.bool
// };

// export default NewKegForm;