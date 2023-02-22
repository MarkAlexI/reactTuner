import React, { useState } from 'react';
import Tuningfork from './components/Tuningfork';
import Tabs from './components/Tabs';
import Settings from './components/Settings';
import './assets/styles/App.css';
import strings from './utils/strings';

export const App: React.FC = () => {
  const [waveType, setWaveType] = useState("sawtooth");
  const [tune, setTune] = useState("Standard");
  const [fiddle, setFiddle] = useState("guitar");
  
  return (
  <div>
    <h1>Tuner Demo</h1>
    Type: {waveType}
    <br />
    Tune: {tune}
    <br />
    Instrument: {fiddle}
    <Tabs>
      <div label="Camerton">
        <Tuningfork
          strings={strings[fiddle][tune]}
          type={waveType}
          tune={tune}
        />
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
          tune={tune}
          onChangeTune={(value) => setTune(value)}
          fiddle={fiddle}
          onChangeFiddle={(value) => setFiddle(value)}
        />
      </div>
    </Tabs>
  </div>
)};