import React, { useContext, useEffect, useState } from 'react';
import logo from "../../assets/images/logo.png";
import { MyContext } from "../../App";
import pattern from '../../assets/images/pattern-2.png';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import googleIcon from '../../assets/images/google_icon.png';
import { MdEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";



const Login = () => {

  const context = useContext(MyContext);
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword,setIsShowPassword] = useState(false);

  useEffect(() =>{
    context.setIsHideSidebarAndHeader(true);
  },[]);

  const focusInput = (index) => {
    setInputIndex(index);
  }
  return (

    <>
    <img src={pattern} alt='' className="loginPattern"/>
      <section className='loginSection'>
        <div className="loginBox">
            <div className="logo text-center">
              <img src={logo} alt='' width="200px"/>
              <h5 className="font-weight-bold">Login to ShopSphere</h5>
              </div>
              <div className='wrapper mt-3 card border'>
                <form>
                  <div className={`form-group position-relative ${inputIndex === 0 && 'focus'}`}>
                    <span className='icon'><MdEmail/></span>
                    <input type='text' className='form-control' onFocus={() => focusInput(0)} onBlur={() => setInputIndex(null)} placeholder='Enter Your Email' autoFocus/>
                  </div>
                  <div className={`form-group position-relative ${inputIndex === 1 && 'focus'}`}>
                    <span className='icon'><IoIosLock/></span>
                    <input type={`${isShowPassword === true ? 'text' : 'password'}`} className='form-control' onFocus={() => focusInput(1)} onBlur={() => setInputIndex(null)} placeholder='Enter Your Password'/>

                    <span className="showPassword" onClick={() => setIsShowPassword(!isShowPassword)}>
                      {
                        isShowPassword === true ? <FaRegEyeSlash/> : <FaRegEye/>
                      }
                      </span>
                  </div>

                  <div className='form-group'>
                    <Button className='btn-blue btn-lg w-100 btn-big'>Sign In</Button>
                  </div>
                  <div className='form-group text-center mb-0'>
                    <Link to={'/forgot-password'} className='link'>Forgot Password</Link>

                    <div className='d-flex align-items-center justify-content-center or mt-3 mb-3'>
                      <span className='line'></span>
                      <span className='txt'>or</span>
                      <span className='line'></span>
                    </div>


                    <Button variant='outlined' className="w-100  btn-lg btn-big googleButton">
                      <img src={googleIcon} alt='' width='25px'/> &nbsp; Sign In With Google</Button>
                  </div>
                </form>
              </div>

              <div className='wrapper mt-3 card border footer p-3'>
                <span className='text-center'>Don't have an account?
                  <Link to={'/signUp'} className='link color ml-2'>Register</Link>
                </span>
              </div>
        </div>
    </section>
    </>
  )
}

export default Login
