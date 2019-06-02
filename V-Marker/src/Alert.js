import React from 'react'

const showNotification = (message) => {
    this.setState({
      top: 100,
      message: "user created successfully"
    }, () => {
      this.timeout = setTimeout(() => {
        this.setState({
          top: -100,
        });
      }, 2000);
    })
  }

const AlertContext = React.createContext({
  lang: 'J',
  name: 'bob',
  showNotification: () => showNotification('j'),
  top: -110,
  message: "allert message"
})

export default AlertContext;