const SideMenuBar = (props) => {
    return(
        <nav style={{ display: props.sideBar ? 'block' : 'none' }}>
          <ul>
            <li className='avatarBlock'>
              <div className='avatar' ></div>
              <span className='avatarHello'>Hello,</span>
              <div className='avatarName'>Hewlett Packard E...<span className='rightArrow'>{'>'}</span></div>
            </li>
            <li className='sideMenus'>
              <div className='menu'><div className='dashboardIcon'></div>Dashboard</div>
            </li>
            <li>
              <div className='menu'>
                <div className='jobIcon'></div>
                Jobs
              </div>
            </li>
            <li>
              <div className='menu'>
                <div className='profileIcon'></div>
                Applications
              </div>
            </li>
            <li>
              <div className='menu'>
                <div className='followersIcon'></div>
                Followers
              </div>
            </li>
            <li>
              <div className='menu'>
                <div className='myInventoryIcon'></div>
                My Inventory
              </div>
            </li>
            <li>
              <div className='menu'>
                <div className='enterpriseIcon'></div>
                Company Profile
              </div>
            </li>
            <li>
              <div className='menu'>
                <div className='collaborationIcon'></div>
                All Users
              </div>
            </li>
            <li>
              <div className='menu-active'>
                <div className='conversationIcon'></div>
                My Account
              </div>
            </li>
            <li className='contactBlock'>
              <div className='contact'>Contact Us - Email: admin@jobsforher.com</div>
            </li>
          </ul>
        </nav>
    )
}

export default SideMenuBar