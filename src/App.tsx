import React, { useState } from 'react';
import Tuningfork from './components/Tuningfork';
import Tabs from './components/Tabs';
import Settings from './components/Settings';
import './assets/styles/App.css';
import strings from './utils/strings.tsx';

export const App: React.FC = () => {
  const [waveType, setWaveType] = useState("sine");
  
  return (
  <div>
    <h1>Tuner Demo</h1>
    Type: {waveType}
    <Tabs>
      <div label="Camerton">
        <Tuningfork strings={strings.guitar.standard} type={waveType} />
        Press the <em>button</em>!
      </div>
      <div label="Tuner">
        Tune your <em>guitar</em>!
      </div>
      <div label="Metronome">
        Play with <em>metronome</em>!
      </div>
      <div label="Settings">
        <Settings
          type={waveType}
          onChangeWaveType={(value) => setWaveType(value)}
        />
      </div>
    </Tabs>
  </div>
)};