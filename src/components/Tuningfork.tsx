import React from 'react';
import '../assets/styles/Tuningfork.css';
import GuitarString from './GuitarString.tsx';
import { getFrequency } from '../utils/getFrequency';
import PropTypes from 'prop-types';

const Tuningfork: React.FC = (props) => (
  <div className="tuningfork">
    <h2>Strings:</h2>
    <p>{props.tune} tune for 6-th strings guitar</p>
    {props.strings.map((el) => {
      const { text, note } = el;
  
      return (
        <GuitarString
          text={text}
          key={text}
          note={note}
          frequency={getFrequency(note)}
          type={props.type}
        />
      );
    })}
  </div>
);

Tuningfork.propTypes = {
  strings: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired,
  })).isRequired,
  type: PropTypes.string.isRequired,
  tune: PropTypes.string.isRequired,
};

export default Tuningfork;