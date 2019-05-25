import React from 'react'

const showNotification = (message) => {
    console.log('fom line 69');
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
    console.log(this.state.top)
  }

const AlertContext = React.createContext({
  lang: 'J',
  name: 'bob',
  alertme: () => { console.log('from ALERT')},
  showNotification: () => showNotification('j'),
  top: -110,
  message: "allert message"
})

export default AlertContext;