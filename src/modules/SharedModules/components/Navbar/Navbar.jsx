import React from 'react'
import img from '../../../../assets/images/avatar.png'

export default function Navbar({ loginDate }) {
  // console.log(loginDate);
  return (
    <>
  <div className='container background m-4 p-3'> 
    <div className="row">
    <div className="col-md-8">
    <div className="search">
      <input type="text" placeholder='Search' className='form-control'/>
    </div>
    </div>
    <div className="col-md-3">
      <div className="username ms-5 ps-5">
        <img src={img} alt=""  className='me-2'/>
        {loginDate?.userName} 
        <span className='ms-4'><i className="fa-solid fa-angle-down"></i></span>
        <span className='ms-4'><i className="fa-solid fa-bell"></i></span>
      </div>
    </div>
    </div>
  </div>

    </>
  )
}
