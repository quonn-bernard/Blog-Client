import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Tab.css"

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const style = {
      marginLeft: "0",
    }
    const { 
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' active';
    }

    return (
      <li 
      style={style}
        className={className}
        onClick={onClick}
      >
        {label}
      </li>
    );
  }
}


export default Tab;