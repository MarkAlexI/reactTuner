import React, { useState } from 'react';
import Tuningfork from './components/Tuningfork';
import Tabs from './components/Tabs';
import Settings from './components/Settings';
import './assets/styles/App.css';
import strings from './utils/strings.tsx';

export const App: React.FC = () => {
  const [val, setVal] = useState("sine");
  
  return (
  <div>
    <h1>Tuner Demo</h1>
    Type: {val}
    <Tabs>
      <div label="Camerton">
        <Tuningfork strings={strings.guitar.standard} type={val} />
        Press the <em>button</em>!
      </div>
      <div label="Tuner">
        Tune your <em>guitar</em>!
      </div>
      <div label="Metronome">
        Play with <em>metronome</em>!
      </div>
      <div label="Settings">
        Type: {val}
        <Settings onChange={(value) => setVal(value)} />
      </div>
    </Tabs>
  </div>
)};