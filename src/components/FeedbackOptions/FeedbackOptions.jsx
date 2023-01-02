import React from 'react';
import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(key => (
      <button type="button" key={key} name={key} onClick={onLeaveFeedback}>
        {key}
      </button>
    ))}
  </>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
