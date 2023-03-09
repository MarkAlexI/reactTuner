import React, { useState, useEffect } from 'react';
import '../assets/styles/Metronome.css';

const Metronome: React.FC = () => {
  let timerId;
  const [tempo, setTempo] = useState('60');
  const [beat, setBeat] = useState('4');
  const [isTurnOn, setTurnOn] = useState(false);
  
  const playBeat = (): void => {
    const audioCtx = new AudioContext();
    let beatNumber: number = 0,
      time: number = 0;

    const osc = audioCtx.createOscillator();
    const gainMaster = audioCtx.createGain();
    osc.connect(gainMaster);
    gainMaster.connect(audioCtx.destination);
    osc.start(time);

    while (time < (60.0 / tempo) * 4 + .1) {
      osc.frequency.value = (beatNumber == 0) ? 800 : 1000;
      gainMaster.gain.value = 1;
      gainMaster.gain.exponentialRampToValueAtTime(1, time + 0.001);
      gainMaster.gain.exponentialRampToValueAtTime(0.001, time + 0.02);

      beatNumber = (beatNumber + 1 === +beat ?
        0 :
        beatNumber + 1);

      time += (60.0 / tempo);
    }

    osc.stop(time + 0.04);
  };

  const on = (): void => {
    if (!isTurnOn) {
      setTurnOn(true);
      playBeat();
    }
  };

  const off = (): void => {
    isTurnOn && setTurnOn(false);
    clearInterval(timerId);
  };

  useEffect(() => {
    if (isTurnOn) {
      timerId = setInterval(playBeat, (60.0 / tempo) * 1000 * +beat);
    }
  }, [isTurnOn]);

  return (
    <div className="container">
      <div className="controls">
        <label>
          BPM:
          <span>
            <p
              onClick={() => setTempo('' + (+tempo - 1))}
              className="bpm-minus"
            >-</p>
            <input
              type="text"
              value={tempo}
              className="bpm-input"
              onInput={(e) => setTempo(e.target.value)}
            />
            <p
              onClick={() => setTempo('' +(+tempo + 1))}
              className="bpm-plus"
            >+</p>
          </span>
        </label>
        <label>
          Beat:
          <span>
            <p
              onClick={() => setBeat('' + (+beat - 1))}
                className="bpm-minus"
            >-</p>
            <input
              type="text"
              value={beat}
              className="ts-top"
              onInput={(e) => setBeat(e.target.value)}
            />
            <p
              onClick={() => setBeat('' +(+beat + 1))}
              className="bpm-plus"
            >+</p>
          </span>
        </label>
      </div>
 
      <div className="flex">
        <button
          className="play-sound"
          onClick={on}
        >
          Start
        </button>
        <button
          className="play-sound"
          onClick={off}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default Metronome;