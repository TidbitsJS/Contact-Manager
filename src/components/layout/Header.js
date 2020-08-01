import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = props => {
  const { branding } = props
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-4 py-100" style={{paddingLeft:'0px'}}>
      <div className="container" style={{padding: '0px'}}>
        <a href="/" className="navbar-brand"> {branding} </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item" style={{marginLeft: 10}}>
              <Link to="/" className="nav-link text-dark">
                <i className="fa fa-home"></i> HOME
              </Link>
            </li>
            <li className="nav-item" style={{marginLeft: 10}}>
              <Link to="/contact/add" className="nav-link text-dark">
                <i className="fa fa-plus-circle"></i>  ADD
              </Link>
            </li>
            <li className="nav-item" style={{marginLeft: 10}}>
              <Link to="/about" className="nav-link text-dark">
                <i className="fa fa-heart"></i>  ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Header.defaultProps = {
  branding : 'My App'
}

Header.propTypes = {
  branding : PropTypes.string.isRequired
}

export default Header
