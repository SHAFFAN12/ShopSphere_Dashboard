import React, { useContext, useEffect, useState } from "react";
import { Button } from '@mui/material';
import FormControl from "@mui/material/FormControl";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Pagination from "@mui/material/Pagination";
import Select from "@mui/material/Select";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { FaCircleUser, FaPencil } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { IoIosTimer } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { TbStars } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import Image1 from "../../assets/images/th.jpg";
import DashboardBox from './components/dashboardBox';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';



const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
];


const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showBy, setshowBy] = useState('');
  const [catBy, setCatBy] = useState('');
  const open = Boolean(anchorEl);
  const ITEM_HEIGHT = 48;
  const context = useContext(MyContext);

  useEffect(() =>{
    context.setIsHideSidebarAndHeader(false);
    window.scrollTo(0,0);
  },[])

  const handleClose = () => {
    setAnchorEl(null);
  };

  

  return (
    <>
      <div className="right-content w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox color={["#1da256", "#48d483"]} icon={<FaCircleUser />} grow={true} />
              <DashboardBox color={["#c012e2", "#eb34fe"]} icon={<TiShoppingCart />} />
              <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<GiShoppingBag />} />
              <DashboardBox color={["#e1850e", "#f3cd29"]} icon={<TbStars />} />
            </div>
          </div>

          <div className="col-md-4 pl-0">
            <div className="box graphbox" style={{ backgroundColor: '#1866ee', borderRadius: '10px', padding: '20px', color: 'white' }}>
              <div className="d-flex align-items-center w-100 bottomEle">
                <h6 className="text-white mb-0 mt-0">Total Sales</h6>
                <div className="ml-auto">
                  <Button className="ml-auto toggleIcon" onClick={() => { }}>
                    <BsThreeDotsVertical style={{ color: 'white' }} />
                  </Button>
                  <Menu
                    className="dropdown_menu"
                    MenuListProps={{
                      'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                      paper: {
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: '20ch',
                        },
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <IoIosTimer /> Last Day
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <IoIosTimer /> Last Week
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <IoIosTimer /> Last Month
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <IoIosTimer /> Last Year
                    </MenuItem>
                  </Menu>
                </div>
              </div>

              <h3 className="text-white font-weight-bold">$3,787,681.00 <span style={{ fontSize: '14px', color: '#8fdd81' }}>40.63% ↑</span></h3>
              <p className="text-white">$3,578.90 in last month</p>

              <ResponsiveContainer width="100%" height={100}>
          <AreaChart data={data}>
            <Area type="monotone" dataKey="value" stroke="white" fill="white" strokeWidth={2} dot={false} />
            <CartesianGrid stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis dataKey="name" tick={false} axisLine={false} />
            <YAxis tick={false} axisLine={false} />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="card shadow border-0 p-3">
          <h3 className="hd">Best Selling Products</h3>

          <div className="row cardFilters mt-3">
            <div className="col-md-3">
              <h4>Show By</h4>
              <FormControl size="small" className="w-100">
                <Select value={showBy} onChange={(e) => setshowBy(e.target.value)} displayEmpty inputProps={{ 'aria-label': 'Without label' }} className="w-100">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>


            <div className="col-md-3">
              <h4>Category By</h4>
              <FormControl size="small" className="w-100">
                <Select value={catBy} onChange={(e) => setCatBy(e.target.value)} displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  labelId="demo-select-small-label" className="w-100">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="table-responsive mt-3">
            <table className="table table-bordered v-align">
              <thead className="thead-dark">
                <tr>
                  <th>UID</th>
                  <th style={{ width: '300px' }}>PRODUCT</th>
                  <th>CATEGORY</th>
                  <th>BRAND</th>
                  <th>PRICE</th>
                  <th>STOCK</th>
                  <th>RATING</th>
                  <th>ORDER</th>
                  <th>SALES</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img className="w-100" src={Image1} alt='' />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>T-shirts for Men...</h6>
                        <p>Men's exclusive summer t-shirts for Men</p>
                      </div>
                    </div>
                  </td>
                  <td>Men</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: '70px' }}>
                      <del className="old">Rs.400</del>
                      <span className="new text-danger">Rs.200</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>200</td>
                  <td>Rs.3k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                    <Link to='/product/details'><Button className="secondary" color="secondary"><FaEye /></Button></Link>
                      <Button className="success" color="success"><FaPencil /></Button>
                      <Button className="error" color="error"><MdDeleteForever /></Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#2</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img className="w-100" src={Image1} alt='' />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>T-shirts for Men...</h6>
                        <p>Men's exclusive summer t-shirts for Men</p>
                      </div>
                    </div>
                  </td>
                  <td>Men</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: '70px' }}>
                      <del className="old">Rs.400</del>
                      <span className="new text-danger">Rs.200</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>200</td>
                  <td>Rs.3k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                    <Link to='/product/details'><Button className="secondary" color="secondary"><FaEye /></Button></Link>
                      <Button className="success" color="success"><FaPencil /></Button>
                      <Button className="error" color="error"><MdDeleteForever /></Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#3</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img className="w-100" src={Image1} alt='' />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>T-shirts for Men...</h6>
                        <p>Men's exclusive summer t-shirts for Men</p>
                      </div>
                    </div>
                  </td>
                  <td>Men</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: '70px' }}>
                      <del className="old">Rs.400</del>
                      <span className="new text-danger">Rs.200</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>200</td>
                  <td>Rs.3k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                    <Link to='/product/details'><Button className="secondary" color="secondary"><FaEye /></Button></Link>
                      <Button className="success" color="success"><FaPencil /></Button>
                      <Button className="error" color="error"><MdDeleteForever /></Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#4</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img className="w-100" src={Image1} alt='' />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>T-shirts for Men...</h6>
                        <p>Men's exclusive summer t-shirts for Men</p>
                      </div>
                    </div>
                  </td>
                  <td>Men</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: '70px' }}>
                      <del className="old">Rs.400</del>
                      <span className="new text-danger">Rs.200</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>200</td>
                  <td>Rs.3k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                    <Link to='/product/details'><Button className="secondary" color="secondary"><FaEye /></Button></Link>
                      <Button className="success" color="success"><FaPencil /></Button>
                      <Button className="error" color="error"><MdDeleteForever /></Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#5</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img className="w-100" src={Image1} alt='' />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>T-shirts for Men...</h6>
                        <p>Men's exclusive summer t-shirts for Men</p>
                      </div>
                    </div>
                  </td>
                  <td>Men</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: '70px' }}>
                      <del className="old">Rs.400</del>
                      <span className="new text-danger">Rs.200</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>200</td>
                  <td>Rs.3k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                    <Link to='/product/details'><Button className="secondary" color="secondary"><FaEye /></Button></Link>
                      <Button className="success" color="success"><FaPencil /></Button>
                      <Button className="error" color="error"><MdDeleteForever /></Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#6</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img className="w-100" src={Image1} alt='' />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>T-shirts for Men...</h6>
                        <p>Men's exclusive summer t-shirts for Men</p>
                      </div>
                    </div>
                  </td>
                  <td>Men</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: '70px' }}>
                      <del className="old">Rs.400</del>
                      <span className="new text-danger">Rs.200</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>200</td>
                  <td>Rs.3k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                    <Link to='/product/details'><Button className="secondary" color="secondary"><FaEye /></Button></Link>
                      <Button className="success" color="success"><FaPencil /></Button>
                      <Button className="error" color="error"><MdDeleteForever /></Button>
                    </div>
                  </td>
                </tr>




              </tbody>
            </table>

            <div className='d-flex tableFooter'>
              <p>showing<b> 12</b> of <b>60</b></p>
              <Pagination count={10} color="primary" className="pagination" showFirstButton showLastButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
