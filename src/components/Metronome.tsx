import React, { useState, useEffect } from 'react';
import '../assets/styles/Metronome.css';

const Metronome: React.FC = () => {
  let timerId;
  const tempo: number = 60;
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

      beatNumber = (beatNumber + 1 === 4 ?
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
      timerId = setInterval(playBeat, (60.0 / tempo) * 4000);
    }
  }, [isTurnOn]);

  return (
    <div>
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
  );
};

export default Metronome;