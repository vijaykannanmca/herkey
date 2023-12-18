import logo from './component.png';
import { useState } from 'react';
import './App.css';
import ToggleButton from '@mui/material/ToggleButton';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import Grid from '@mui/material/Grid';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import MyProfile from './MyProfile';
import MyAccount from './MyAccount';
import AppSetting from './AppSetting';
import SideMenuBar from './SideMenuBar';
function App() {
  const [sideBar, setSideBar] = useState(true)
  const handleSideBar = () => {
    setSideBar(() => !sideBar)
  }
  
  return (
    <>
      <div className='header'>
        <div className='applogo'>
          <img src={logo} alt="logo" />
          <ToggleButton value="left" aria-label="left aligned" onClick={handleSideBar}>
            {sideBar ? <FormatAlignRightIcon /> : <FormatAlignJustifyIcon />}
          </ToggleButton>
        </div>
        <ul>
          <li>DASHBOARD</li>
          <li>PACKAGES</li>
          <li>EVENTS</li>
          <li>BLOGS</li>
        </ul>
        <div className='forever'></div>
      </div>
      <div className='header1'>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <ToggleButton value="left" aria-label="left aligned" onClick={handleSideBar}>
              {sideBar ? <FormatAlignRightIcon /> : <FormatAlignJustifyIcon />}
            </ToggleButton>
          </Grid>
          <Grid item xs={4}>
            <img src={logo} alt="logo" />
          </Grid>
          <Grid item xs={4}>
            <div className='forever1'></div>
          </Grid>
        </Grid>
      </div>

      <section>
        <SideMenuBar sideBar={sideBar}/>
        <article>
          <div className='breadCrum'>Dashboard | <a href="/">My Account</a></div>
          <ul className='sBreadCrum'>
            <li>My Inventory</li>
            <li>Company Profile</li>
            <li>All Users</li>
            <li className='activeBread'>My Account</li>
          </ul>
          <div className='page'>
            <div className='pageTitle'>
              <div className='goBack'></div>
              <span>My Account</span>
            </div>
            <hr></hr>
            <div className='pageBody'>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <MyProfile />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MyAccount />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppSetting />
                </Grid>
              </Grid>
            </div>
          </div>
        </article>
      </section>
      <footer>
        <div className='copyRight'>2019 @ Jobsforher</div>
        <div className='fotlist'><ul><li>About Us</li><li>Pricing</li><li>FAQ's</li></ul></div>
      </footer>
    </>
  );
}

export default App;
