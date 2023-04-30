import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'react-simple-star-rating';

function BookRating() {
  const [ rating, setRating ] = useState(0)

  const handleRating = (rate) => {
      setRating(rate)
  }

	return (
    <div className='App'>
      <div className='simpleStarRating'>
        <div className='fillIcons'></div>
        <div className='emptyIcons'></div>
      </div>
      <Rating onClick={handleRating} initialValue={rating} />
    </div>
  );  
}

// Type checking a Component's Props with PropTypes.
BookRating.propTypes = {
  rate: PropTypes.number.isRequired,
}
export default BookRating;