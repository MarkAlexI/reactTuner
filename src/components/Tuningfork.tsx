import React from 'react';
import '../assets/styles/Tuningfork.css';
import GuitarString from './GuitarString.tsx';
import strings from '../utils/strings.tsx';

export const Tuningfork: React.FC = () => (
  <div className="tuningfork">
    <h2>Strings:</h2>
    {strings.map((el) => {
      const { text, span, frequency } = el;
  
      return (
        <GuitarString
          text={text}
          key={text}
          span={span}
          frequency={frequency}
        />
      );
    })}
  </div>
);