import React, { useContext, useEffect, useState } from 'react';
import logo from "../../assets/images/logo.png";
import { MyContext } from "../../App";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import pattern from '../../assets/images/pattern-2.png';
import { MdEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import googleIcon from '../../assets/images/google_icon.png';
import { FaUserAlt } from "react-icons/fa";
import { IoShieldCheckmarkSharp, IoHome } from "react-icons/io5";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";


const SignUp = () => {
    const context = useContext(MyContext);
    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword,setIsShowPassword] = useState(false);
    const [isShowConfirmPassword,setIsShowConfirmPassword] = useState(false);
  
    useEffect(() =>{
      context.setIsHideSidebarAndHeader(true);
    },[]);
  
    const focusInput = (index) => {
      setInputIndex(index);
    }
    return (
  
      <>
      <img src={pattern} alt='' className="loginPattern"/>
        <section className='loginSection signUpSection'>
          
          <div className="row">
            <div className="col-md-8 d-flex align-items-center flex-column justify-content-center part1">
              <h1>ShopSphere ECommerce Dashboard & Admin Panel</h1>
              <p>🛍 Your ultimate destination for all things fabulous! Explore a world of style and convenience at ShopSphere. Discover the latest trends, must-have essentials, and unique treasures all in one place. Join our vibrant community of savvy shoppers and let's make every purchase an experience to remember! ✨</p>

              <div className='w-100 mt-4'>
              <Link to={'/'}><Button className='btn-blue btn-lg btn-big'><IoHome/>Go To Home</Button></Link>
              </div>            
            </div>
            
            
            
            <div className="col-md-4 pr-0">
            <div className="loginBox">
              <div className="logo text-center">
                <img src={logo} alt='' width="200px"/>
                <h5 className="font-weight-bold">Register a new account</h5>
                </div>
                <div className='wrapper mt-3 card border'>
                  <form>
                    <div className={`form-group position-relative ${inputIndex === 0 && 'focus'}`}>
                      <span className='icon'><FaUserAlt/></span>
                      <input type='text' className='form-control' 
                      onFocus={() => focusInput(0)} onBlur={() => setInputIndex(null)} 
                      placeholder='Enter Your Name'/>
                    </div>
                    <div className={`form-group position-relative ${inputIndex === 1 && 'focus'}`}>
                      <span className='icon'><MdEmail/></span>
                      <input type='text' className='form-control' onFocus={() => focusInput(1)} onBlur={() => setInputIndex(null)} placeholder='Enter Your Email'/>
                    </div>
                    
                    
                    <div className={`form-group position-relative ${inputIndex === 2 && 'focus'}`}>
                      <span className='icon'><IoIosLock/></span>
                      <input type={`${isShowPassword === true ? 'text' : 'password'}`} className='form-control' onFocus={() => focusInput(2)} onBlur={() => setInputIndex(null)} placeholder='Enter Your Password'/>
  
                      <span className="showPassword" onClick={() => setIsShowPassword(!isShowPassword)}>
                        {
                          isShowPassword === true ? <FaRegEyeSlash/> : <FaRegEye/>
                        }
                        </span>
                    </div>
                    
                    
                    <div className={`form-group position-relative ${inputIndex === 3 && 'focus'}`}>
                      <span className='icon'><IoShieldCheckmarkSharp/></span>
                      <input type={`${isShowConfirmPassword === true ? 'text' : 'password'}`} 
                      className='form-control' onFocus={() => focusInput(3)} 
                      onBlur={() => setInputIndex(null)} placeholder='Confirm Your Password'/>
  
                      <span className="showPassword" onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}>
                        {
                          isShowConfirmPassword === true ? <FaRegEyeSlash/> : <FaRegEye/>
                        }
                        </span>
                    </div>

                    <FormControlLabel control={<Checkbox/>} label="I agree to the all Terms & Conditions"/> 
  
                    <div className='form-group'>
                      <Button className='btn-blue btn-lg w-100 btn-big'>Sign Up</Button>
                    </div>
                    <div className='form-group text-center mb-0'>  
                      <div className='d-flex align-items-center justify-content-center or mt-3 mb-3'>
                        <span className='line'></span>
                        <span className='txt'>or</span>
                        <span className='line'></span>
                      </div>
  
  
                      <Button variant='outlined' className="w-100  btn-lg btn-big googleButton">
                        <img src={googleIcon} alt='' width='25px'/> &nbsp; Sign In With Google</Button>
                    </div>
                  </form>

                  <span className='text-center d-block mt-3'>You have an account?
                    <Link to={'/login'} className='link color ml-2'>Sign In</Link>
                  </span>
                </div>
  
                
          </div>
            </div>
          </div>
          
          
      </section>
      </>
    )
}

export default SignUp
