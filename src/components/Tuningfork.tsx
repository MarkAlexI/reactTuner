import React from 'react';
import '../assets/styles/Tuningfork.css';
import GuitarString from './GuitarString.tsx';

export const Tuningfork: React.FC = () => (
  <div className="tuningfork">
    <h2>Strings:</h2>
      <GuitarString
        text="1-st string"
        span="A-4"
        frequency={440}
      >
      </GuitarString>
      <GuitarString
        text="2-nd string"
        span="C#-2"
        frequency={1000}
      >
      </GuitarString>
  </div>
);