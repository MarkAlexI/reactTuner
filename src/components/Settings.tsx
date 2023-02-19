import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';

const Settings: React.FC = (props) => {
  const typeOptions: SelectOption[] = [
    { label: 'Sinusoide', value: 'sine' },
    { label: 'Sawtooth', value: 'sawtooth' },
    { label: 'Square', value: 'square' },
    { label: 'Triangle', value: 'triangle' },
  ];
  
  const tuneOptions: SelectOption[] = [
    { label: 'Standard', value: 'Standard' },
    { label: 'Drop D', value: 'Drop D' },
  ];
  
  const handleChangeType = (event: Event): void => {
    props.onChangeWaveType(event.target.value);
  };
  
  const handleChangeTune = (event: Event): void => {
    props.onChangeTune(event.target.value);
  };
  
  return (
  <div className="settings">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAADiklEQVR4nO1X6U8TQRztX8gHQYFyeHCVEEmN8SJCodeWNipQRDyQRgsISMuNpWVbClIOyxexFEEQLEel1UaNfhB9ZibSCLulha7YxE7yks3szG/ezu96KxIlh0AjpWwAiQQRH0HdUCghkJIkOJS8wdChYuZExTNOkJO5hIhBpi+AVJkFzi3sAZnT9AX/PUFZ5zrO6EY5BHO1DlQ+3Tg+gtrBDzxzH3H+7hxKG6c5BEvuTKH0/hxdE4utuAgquv1Ikw2j+PYsFOYtOnfVuIwM5QiK6iZgfBHgEHw8sw2JfoKuudayQvfITZsornfjZJUVqp73whHMr5lCVYcHKpOXGs/VOpHNsGidDXKI7UebO4gshkVOtRPpciuYntcob5tDYd2MMATLWt/SA9j1H/TAkXc7aGDfwbr2PSq5XdjWvqPR4QPr2wnbyFTaUN6+Fh9BEititR3NLn/MZJwx4v7YBrLUDt4YjZmgtMmDXI0Djo2fBx7W7PJDonfR2kcgqXNF/Sj7xg+I1SwuNi8cnSDTu41zNydQVPscg0vfeA9SmrxIl9tw5fEbaPqDFFeMyxCrWPqOb0//4lcU1Iwj/9YkmP5AfDGoHQxBem8O6Qoreua/cG4uXW6jxZrzcX0B+m7/TRIbJFmkDzzUtmB1kLije/7znsMkehe9uUh7yDuyZj9BEteCF+rUCgsnc1NlFjD9kdsZcTeJyT/3kAyO1qePRlBmgW31cASZ4yRI3GL27HVxsd6Fq8YoLq4/BhdfMrzGyaphdL4M7TnMMOlHpoqNmCSZPDWUJonCigtNnvgJErlUWDuN01oHTK8+8ZYMlWkBpxSkzCxRlxJcfrRE55RdC7x7+ha/Iu/mGPJrpmmcHpkgKQXZjD3coiLBMOmn7t4t1OSZzB1YqNd/F+qH3vhaHXGTYeq94K2uaXwTWWo7tANxtDqCspYV5GjstDXttijSR4kAcB5CLOitq+EyNeLbgVg9gutP4hQLu8i7NQmV2Qtt7xIylDZka0apwmmNQW61uINUmp3WjtFEU5sXUNn+CgW108Jlsdy8RQt1kf5FWMYTEZqhZKkobXHzC1YiZsmaa8blsB3JbTcVv6puAQUrQfVAJMn/EtJ7MxyCJQ2RJT+frbgJRoKsw4ezN5wcgjnVDlR1bSbAb2fvNtIqhzkEo7XBYyOoS/Qfd91fQJKg7r+9wZQEgig5RMKMXwy35P9XjuOEAAAAAElFTkSuQmCC" />
    
    <div>
      <Select
        label="Select type of wave:"
        options={typeOptions}
        value={props.type}
        onChange={handleChangeType}
      />
    
      <p>Type: {props.type}.</p>
    </div>
    <div>
      <Select
        label="Select type of tune:"
        options={tuneOptions}
        value={props.tune}
        onChange={handleChangeTune}
      />
        
      <p>Type: {props.tune}.</p>
    </div>
  </div>
)};

Settings.propTypes = {
  type: PropTypes.string.isRequired,
  onChangeWaveType: PropTypes.func.isRequired,
};

export default Settings;