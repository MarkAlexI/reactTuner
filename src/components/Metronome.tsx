import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createSound } from '../utils/createSound';
import '../assets/styles/Metronome.css';

const Metronome: React.FC = (props) => {
  const [isTurnOn, setTurnOn] = useState(false);
  let timerId;
  
  const tempo = (): void => {
    createSound(440, .25, props.type);
    console.log('@');
  };
  
  const playTempo = () => {
    timerId = setInterval(tempo, 1000);
  };
  
  return (
    <div>
      {props.type}
      <button className="play-sound" onClick={ () => {
           if (isTurnOn) return;
           setTurnOn(true);
           playTempo();
         }
       }>
        Start
      </button>
      <button className="play-sound" onClick={ () => {
          timerId && clearInterval(timerId);
          isTurnOn && setTurnOn(false);
        }
      }>
        Stop
      </button>
    </div>
  );
};

/*Metronome.propTypes = {
  text: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  frequency: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};*/

export default Metronome;