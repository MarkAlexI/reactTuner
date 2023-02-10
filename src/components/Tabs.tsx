import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const Tabs: React.FC = (props) => {
  const [state, setState] = useState({
    activeTab: props.children[0].props.label,
  });

  const onClickTabItem = (tab) => {
    setState({ activeTab: tab });
  }

  return (
    <div className="tabs">
      <ol className="tab-list">
        {props.children.map((child) => {
          const { label } = child.props;
  
          return (
            <Tab
              activeTab={state.activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </ol>
      <div className="tab-content">
        {props.children.map((child) => {
          if (child.props.label !== state.activeTab) return undefined;
            return child.props.children;
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

export default Tabs;