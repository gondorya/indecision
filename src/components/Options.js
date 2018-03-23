import React from 'react';
import Option from './Option.js';

const Options = (props) => (
    <div>
      <button
        className="cta cta--large cta--reverse"
        onClick={props.handleDeleteOptions}
      >Remove All</button>
      {props.options.length === 0 && <p>Add option</p>}
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );

export default Options;