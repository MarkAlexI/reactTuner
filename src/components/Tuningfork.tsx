import React from 'react';
import '../assets/styles/Tuningfork.css';
import GuitarString from './GuitarString.tsx';
import PropTypes from 'prop-types';

const Tuningfork: React.FC = (props) => (
  <div className="tuningfork">
    <h2>Strings:</h2>
    <p>{props.tune} tune for 6-th strings guitar</p>
    {props.strings.map((el) => {
      const { text, span, frequency } = el;
  
      return (
        <GuitarString
          text={text}
          key={text}
          span={span}
          frequency={frequency}
          type={props.type}
        />
      );
    })}
  </div>
);

Tuningfork.propTypes = {
  strings: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    span: PropTypes.string.isRequired,
    frequency: PropTypes.number.isRequired,
  })).isRequired,
  type: PropTypes.string.isRequired,
  tune: PropTypes.string.isRequired,
};

export default Tuningfork;