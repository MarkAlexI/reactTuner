import React from 'react';
import Tuningfork from './components/Tuningfork';
import Tabs from './components/Tabs';
import './assets/styles/App.css';
import strings from './utils/strings.tsx';

export const App: React.FC = () => (
  <div>
    <h1>Tuner Demo</h1>
    <Tabs>
      <div label="Camerton">
        <Tuningfork strings={strings.guitar.standard} />
        Press the <em>button</em>!
      </div>
      <div label="Tuner">
        Tune your <em>guitar</em>!
      </div>
      <div label="Metronome">
        Play with <em>metronome</em>!
      </div>
    </Tabs>
  </div>
);