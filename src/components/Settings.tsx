import React from 'react';

const Settings: React.FC = (props) => {
  
  return (
  <div className="settings">
    <button onClick={() => props.onChange("triangle")}>Change type</button>
  </div>
)};

export default Settings;