import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { createContext, useState } from 'react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Login2 from './pages/Login2';


const MyContext = createContext();

function App() {

  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);




  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader
  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>

        {/* Conditionally render Header and Sidebar based on isHideSidebarAndHeader */}
        {!isHideSidebarAndHeader && <Header />}
        <div className="main d-flex">
          {
            !isHideSidebarAndHeader &&
            <div className={`SidebarWrapper ${isToggleSidebar ? 'toggle' : ''}`}>
              <SideBar />
            </div>
          }
          <div className={`content ${isHideSidebarAndHeader ? 'full' : ''} ${isToggleSidebar ? 'toggle' : ''}`}>
            <Routes>
              <Route path='/' exact={true} element={<Dashboard />} />
              <Route path='/dashboard' exact={true} element={<Dashboard />} />
              <Route path='/login' exact={true} element={<Login />} />
              <Route path='/login2' exact={true} element={<Login2 />} />
              <Route path='/signUp' exact={true} element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
