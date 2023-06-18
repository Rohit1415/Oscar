import React from 'react'
import './login.css'
import { useState } from 'react'
import Swal from 'sweetalert2'
function Login() {
    let fixedLoginData = {
        userName:"Rohit",
        passwoord:12345
    }
    localStorage.setItem("loginDataObject" , JSON.stringify(fixedLoginData));
    const [obj, setobj] = useState({})
    const getLoginData = (x) => {
        obj[x.target.name] = x.target.value;
        setobj({...obj})
    }
    const loginBtn = () => {
        if(fixedLoginData.userName == obj.user && fixedLoginData.passwoord == obj.pass)
        {
            console.log('Login'); 
            localStorage.setItem("loginnum", JSON.stringify(1138))            
            // Swal.fire({
            //     position: 'center',
            //     icon: 'success',
            //     title: 'Login successfully',
            //     showConfirmButton: false,
            //     timer: 1500
            //   })
            window.location.href='/home';
        }
        else
        {
            Swal.fire({
                icon: 'error',
                title: 'Oops....',
                text: 'Enter Correct ID / Password',
              })
        }
    }
  return (
    <div className='container login_outer p-5'>
        <div className='p-5 login_div_2 rounded-5'>
            <input type="text" name='user' onChange={getLoginData} className='form-control mb-4 p-3' placeholder='Username'/>
            <input type="text" name='pass' onChange={getLoginData} className='form-control mb-4 p-3' placeholder='Password'/>
            <div className='d-flex justify-content-center'>
                <button onClick={loginBtn} className='btn btn-outline-info px-5 p-2'>LOGIN</button>
            </div>
        </div>
    </div>
  )
}

export default Login