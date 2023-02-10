import React from 'react';
import PropTypes from 'prop-types';

const Tab: React.FC = (props) => {
  let className = 'tab-list-item';
  
  const onClick = () => {
    const { label, onClick } = props;
    onClick(label);
  };
  
  if (props.activeTab === props.label) {
    className += ' tab-list-active';
  }
  
  return (
    <li
      className={className}
      onClick={onClick}
    >
      {props.label}
    </li>
  );
};

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;