import React from 'react';
import PropTypes from 'prop-types';
import { createSound } from '../utils/createSound';
import '../assets/styles/GuitarString.css';

const GuitarString: React.FC<StringParameters> = (props) => {
  return (
    <div className="string">
      <p>{props.text}</p>
      <span>{props.note}</span>
      <button className="play-sound" onClick={ () => {
          console.log(props.text);
          createSound(props.frequency, 1, props.type);
        }
      }>
        Play
      </button>
    </div>
  );
};

GuitarString.propTypes = {
  text: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  frequency: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default GuitarString;