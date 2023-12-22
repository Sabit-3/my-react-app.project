import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
// import { FaHamburger } from 'react-icons/fa';
const Navbar = (props) => {



  




  return (
    <div>
      <nav className={props.divName}>

        <span>𝖘𝖆𝖇𝖎𝖙</span>
        {props.hambgr}
        <ul>
          <li> <Link className={props.divLi} to='/'>𝙷𝙾𝙼𝙴</Link> </li>
          <li> <Link className={props.divLi} to='/services'>𝖲𝖤𝖱𝖵𝖨𝖢𝖤𝖲</Link> </li>
          <li> <Link className={props.divLi } to='/contact'>𝙲𝙾𝙽𝚃𝙰𝙲𝚃</Link> </li>
          <li> <Link className={props.divLi} to='/Gallery'>𝙶𝙰𝙻𝙻𝙴𝚁𝚈</Link> </li>
          {/* <li> <Link className={props.divLi} to='/news'>News</Link> </li> */}
          <li> <Link className={props.divLi} to='/about'> 𝙰𝙱𝙾𝚄𝚃</Link> </li>
        </ul>



        <form className='nav-form' method='post'>
          <input placeholder='search' required />
          <button type='submit'> Search </button>
        </form>
        <button onClick={props.functiondarkmode} className='btn-dark-mode'>

       {props.buttonName}

        </button>
      </nav>
    </div>
  );
}

export default Navbar;
