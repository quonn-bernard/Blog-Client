import React from 'react';


class Registration extends React.Component {
  render(){
    return (
      <div>
        <section id="banner" className="section section-grid">
          <div className="section-grid-item" />
          <div className="section-grid-item">
            <h1>Sign Up Here, So You Never Miss A Post!</h1>
          </div>

          <div className="section-grid-item" />
        </section>
        <section className="section section-grid">
      <div />
      <div className="section-grid-item">
        <form id="contact-form">
          <input type="text" placeholder="Enter your handle" />
          <input type="text" placeholder="Enter your email" />
          <input type="text" placeholder="Enter your password" />
          <input class="btn" type="submit" value="SUBMIT" />
        </form>
      </div>
      <div />
    </section></div>
    );
  }
  
}

export default Registration;
