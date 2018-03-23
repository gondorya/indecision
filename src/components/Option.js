import React from 'react';


const Option = (props) => (
    <div className="option">
      {props.optionText}
      <button
        className="cta cta--small"
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );

export default Option;