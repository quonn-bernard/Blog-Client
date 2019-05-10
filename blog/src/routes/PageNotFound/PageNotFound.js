import React, { Component } from 'react'
import { Section } from '../../Components/Utils/Utils'

class PageNotFound extends Component {
  render() {
    return (
      <Section className='PageNotFound'>
        <h2>404 - Page not found</h2>
        <p>Try going back to your previous page.</p>
      </Section>
    )
  }
}

export default PageNotFound