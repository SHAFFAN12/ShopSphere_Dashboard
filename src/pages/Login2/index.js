import React, { useContext, useEffect, useState } from 'react';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { FaGoogle, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
// import Image1 from "../../assets/images/log.svg";
// import Image1 from "../../assets/images/1.jpg";
import Image1 from "../../assets/images/2-removebg-preview.png";
// import Image1 from "../../assets/images/2.jpg";
// import Image1 from "../../assets/images/3.jpg";
import Image2 from "../../assets/images/register.svg";
import { MyContext } from '../../App';
import { FaUserAlt } from "react-icons/fa";
import BackgroundImage from "../../assets/images/pattern-2.png";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { IoShieldCheckmarkSharp} from "react-icons/io5";


const Login2 = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [inputIndex, setInputIndex] = useState(null);
  
  const [isShowPassword,setIsShowPassword] = useState(false);
  const [isShowConfirmPassword,setIsShowConfirmPassword] = useState(false);



  const context = useContext(MyContext);
  useEffect(() => {
    // Hide the sidebar and header
    context.setIsHideSidebarAndHeader(true);
  }, []);

  const focusInput = (index) => {
    setInputIndex(index);
  }


  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <>
      <img src={BackgroundImage} className="loginPattern" alt='background-image' />
      <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form className="form sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className={`input-field ${inputIndex === 0 && 'focus'}`}>
                <FaUserAlt />
                <input type="text" placeholder="Email" onFocus={() => focusInput(0)} onBlur={() => setInputIndex(null)} autoFocus/>
              </div>



              <div className={`input-field ${inputIndex === 1 && 'focus'}`}>
                <IoIosLock />
                <input type={`${isShowPassword === true ? 'text' : 'password'}`} placeholder="Password" onFocus={() => focusInput(1)} onBlur={() => setInputIndex(null)} />
                <span className="showPassword" onClick={() => setIsShowPassword(!isShowPassword)}>
                      {
                        isShowPassword === true ? <FaRegEyeSlash/> : <FaRegEye/>
                      }
                      </span>
              </div>



              <input type="submit" value="Login" className="btn solid" />


              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <Link to={'/'} className="social-icon">
                  <FaFacebookF/>
                </Link>
                <Link to={'/'} className="social-icon">
                  <FaTwitter />
                </Link>
                <Link to={'/'} className="social-icon">
                  <FaGoogle />
                </Link>
                <Link to={'/'} className="social-icon">
                  <FaLinkedinIn />
                </Link>
              </div>
            </form>

            <form className="form sign-up-form">
              <h2 className="title">Sign up</h2>

              <div className={`input-field ${inputIndex === 2 && 'focus'}`}>
                <FaUserAlt />
                <input type="text" placeholder="Username" onFocus={() => focusInput(2)} onBlur={() => setInputIndex(null)} autoFocus/>
              </div>


              <div className={`input-field ${inputIndex === 3 && 'focus'}`}>
                <MdEmail />
                <input type="email" placeholder="Email" onFocus={() => focusInput(3)} onBlur={() => setInputIndex(null)} />
              </div>


              <div className={`input-field ${inputIndex === 4 && 'focus'}`}>
                <IoIosLock />
                <input type={`${isShowPassword === true ? 'text' : 'password'}`} placeholder="Password" onFocus={() => focusInput(4)} onBlur={() => setInputIndex(null)} />
                <span className="showPassword" onClick={() => setIsShowPassword(!isShowPassword)}>
                      {
                        isShowPassword === true ? <FaRegEyeSlash/> : <FaRegEye/>
                      }
                      </span>
              </div>


              <div className={`input-field ${inputIndex === 5 && 'focus'}`}>
                <IoShieldCheckmarkSharp />
                <input type={`${isShowConfirmPassword === true ? 'text' : 'password'}`} placeholder="Confirm Password" onFocus={() => focusInput(5)} onBlur={() => setInputIndex(null)} />
                <span className="showPassword" onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}>
                      {
                        isShowConfirmPassword === true ? <FaRegEyeSlash/> : <FaRegEye/>
                      }
                      </span>
              </div>


              <input type="submit" className="btn" value="Sign up" />


              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <Link to={'/'} className="social-icon">
                  <FaFacebookF />
                </Link>
                <Link to={'/'} className="social-icon">
                  <FaTwitter />
                </Link>
                <Link to={'/'} className="social-icon">
                  <FaGoogle />
                </Link>
                <Link to={'/'} className="social-icon">
                  <FaLinkedinIn />
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="Content">
              <h3>New here ?</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</p>
              <Button className="btn transparent" onClick={handleSignUpClick}>
                Sign up
              </Button>

              
            </div>
            <img src={Image1} className="image" alt="sign up" />
          </div>

          <div className="panel right-panel">
            <div className="Content">
              <h3>One of us ?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
              <Button className="btn transparent" onClick={handleSignInClick}>
                Sign in
              </Button>
            </div>
            <img src={Image2} className="image" alt="sign in" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login2;
