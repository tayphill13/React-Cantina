import React from 'react';
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.kegList.map((keg) =>
      <Keg
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        abv={keg.abv}
        pintsRemaining={keg.pintsRemaining}
        kegId={keg.id}
        key={keg.id} />
    
      )}
      <button onClick={props.onClick}>Add Keg</button>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onClick: PropTypes.func
};


export default KegList;