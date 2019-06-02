import React, { createContext } from 'react';

const NotificationContext = createContext({
  top: '',
  message: '',
  updatePosition: () => { },
});

export default class NotificationProvider extends React.Component {
  updatePosition = () => {
    this.setState({
      top: 100,
      message: "NO MESSAGE HAS BEEN SET"
    }, () => {
      this.timeout = setTimeout(() => {
        this.setState({
          top: -100,
        });
      }, 2000);
    })
  };

  test = () => {
    ('test')
  }

  state = {
    top: -100,
    updatePosition: this.updatePosition,
    message: 'NO MESSAGE',
    test: this.test
  };

  render() {
    return (
      <NotificationContext.Provider value={this.state}>
        {this.props.children}
      </NotificationContext.Provider>
    );
  }
}

export const NotificationConsumer = NotificationContext.Consumer;

