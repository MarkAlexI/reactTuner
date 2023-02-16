import React from 'react';
import PropTypes from 'prop-types';
import { createSound } from '../utils/createSound.tsx';
import '../assets/styles/GuitarString.css';

const GuitarString: React.FC<StringParameters> = (props) => {
  return (
    <div className="string">
      <p>{props.text}</p>
      <span>{props.span}</span>
      <button className="play-sound" onClick={ () => {
          console.log(props.text);
          createSound(props.frequency, 1);
        }
      }>
        Play
      </button>
    </div>
  );
};

GuitarString.propTypes = {
  text: PropTypes.string.isRequired,
  span: PropTypes.string.isRequired,
  frequency: PropTypes.number.isRequired
};

export default GuitarString;