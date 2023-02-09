import React from 'react';
import '../assets/styles/Tuningfork.css';

function createSound(frequency: number, duration: number): void {
  const audioCtx = new AudioContext();
  const oscillator = audioCtx.createOscillator();
  oscillator.frequency.value = frequency;
  oscillator.connect(audioCtx.destination);
  oscillator.start();
  oscillator.stop(duration);
}

export const Tuningfork: React.FC = () => (
  <div>
    <h2>Apollo440</h2>
      <button className="play-sound" onClick={ (e) => createSound(440, 1) }>
        Sound
      </button>
  </div>
);