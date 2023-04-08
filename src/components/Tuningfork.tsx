import React from 'react';
import '../assets/styles/Tuningfork.css';
import GuitarString from './GuitarString.tsx';
import { getFrequency } from '../utils/getFrequency';
import PropTypes from 'prop-types';

const Tuningfork: React.FC = (props) => {
  const stringIndex: Array<string> = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th'];
  
  return (
  <div className="tuningfork">
    <h2>Strings:</h2>
    <p>{props.tune} tune for {props.strings.length}-th strings guitar</p>
    {props.strings.map((note, i) => {
  
      return (
        <GuitarString
          text={stringIndex[i] + ' string'}
          key={note + i}
          note={note}
          frequency={getFrequency(note)}
          type={props.type}
        />
      );
    })}
  </div>
)};

Tuningfork.propTypes = {
  strings: PropTypes.instanceOf(Array).isRequired,
  type: PropTypes.string.isRequired,
  tune: PropTypes.string.isRequired,
};

export default Tuningfork;