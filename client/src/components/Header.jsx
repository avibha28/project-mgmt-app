import React from 'react'
import logo from './assets/logo.png'

function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <a className="navbar-brand" href="/">
        <div className="d-flex">
            <img src={logo} alt="logo" className='mr-2' />
            <div>Project Mgmt</div>
        </div>
    </a>
    
    
  </div>
</nav>
    </div>
  )
}

export default Header