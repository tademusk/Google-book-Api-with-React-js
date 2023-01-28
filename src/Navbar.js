import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Navbar.scss"

const Navbar = () => {

   const [search, setSearch] = useState('');

    // const [isScrolled, setIsScrolled] = useState(true);

    // // window.onscroll = () => {
    // //     setIsScrolled (window.pageYOffset === 0 ? false : true);
    // //     return () => window.onscroll = null
    // // }
  return (
    <div className={"navbar Scrolled"}>
      <div className="container">
        <div className="left">
            <div className="logo">
               <img className='img__logo' src="https://elearning.amu.edu.et/pluginfile.php/1/core_admin/logocompact/300x300/1663293542/amu_ess.png"  alt="AMIT" />  
               <h2>AmitLab</h2>
            </div>

            <span>Programming</span>
            <span>Scientific</span>
            <span>Art</span>
            <span>Amit materials</span>

        </div>
        <div className="right">
          <div className='searchbar'>
            <input type="text" className='input' placeholder ='Search Book'
            value={search} onChange = {e=>setSearch(e.target.value)}
            onKeyPress={search} />
            <div className="searchIcon">
              <SearchIcon className='icon'/>
            </div>
          </div>       
            <NotificationsIcon className='icons' />
            <AccountCircleIcon className='icons'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar