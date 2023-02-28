import React from 'react'
import "./styles/navbar.css"

const NavBar = ({showModal}) => {

    return (
      <div className='navbar'>
        <h1 >Users</h1>
        <button onClick={showModal} className='navBar_btn' > <i className='bx bx-plus'></i> Add new user </button>
      </div>
    )
}
export default NavBar;