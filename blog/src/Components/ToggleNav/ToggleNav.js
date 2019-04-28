import React from 'react'
import { Link } from 'react-router-dom';
import './ToggleNav.css'

const ToggleNav = props => {
  return (
      
    <nav className="side-drawer">
      <div className="nav-grid">
                        <div className="nav-grid-item">
                            <a>
                                <h1>
                                <Link to='/'>
                                        Blog
                                </Link>
                                </h1>
                            </a>
                        </div>

                        <div className="nav-grid-item-2">
                            <ul className="toggleNavUl">
                                <li><Link to='/register'>
                                    Register
                                    </Link></li>
                                            <li>Sign Up</li>
                                            <li><Link to='/contact'>
                                    Contact
                                    </Link></li>
                            </ul>
                        </div>
                </div>
    </nav>
  )
}

export default ToggleNav