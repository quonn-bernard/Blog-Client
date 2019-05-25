import React from 'react'

import './HamburgerBtn.css'

function HamburgerBtn (props){
  return(
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
  )
}

export default HamburgerBtn