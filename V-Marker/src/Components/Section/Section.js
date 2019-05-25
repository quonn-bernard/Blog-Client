import React from 'react'
import './Section.css'

function Section (props){
  return (
    <Section className="section">{props.children}</Section>
  )
}

export default Section