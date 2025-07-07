import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>

        <div className='Nav'>
                <img src="https://dynamic.design.com/asset/logo/b777bb05-ef3a-40c1-81e5-c218a4b7311f/logo?logoTemplateVersion=1&v=638750126514600000&text=+NovaExam+online+exam+potel&layout=auto" alt="" srcset="" />
            <h1 className='nova'>Nova</h1>
            <h1 className='exam'>Exam</h1>
            
            <button className='signup'>SignUp</button>
            <button className='LogIn'>Login</button>
          
        </div>
    </div>
  )
}

export default Navbar
