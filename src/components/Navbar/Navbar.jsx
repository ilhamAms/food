import './Navbar.scss';
import {BiSearch} from 'react-icons/bi';
import {BsBucket, BsFillTelephoneFill} from 'react-icons/bs';
import {IoIosArrowDown} from 'react-icons/io';
import {CgPhone} from 'react-icons/cg';
import f from '../../assets/F.png';
import oodi from '../../assets/oodi.png';

const Navbar = () => {
  return (
    <div className='navbar-container container'>
        <nav className='flex-center'>
            <div className="logo">
                <a href="" className='flex-center'>
                    <div className='f-logo'>
                        <img src={f} alt="logo" />
                    </div>
                        <img src={oodi} alt="" />  
                </a>
            </div>

            <ul className="menu">
                <li className="menu-items">
                    <a href="" className='active'>หน้าแรก</a>
                </li>
                <li className="menu-items">
                    <a href="" className='flex-center has-sub-menu'>เมนู <IoIosArrowDown className='icon'/></a>
                </li>
                <li className="menu-items">
                    <a href="" className='flex-center has-sub-menu'>บริการ <IoIosArrowDown className='icon' /></a>
                </li>
                <li className="menu-items">
                    <a href="">อื่นๆ</a>
                </li>
            </ul>

            <div className="right-items flex-center">
                <BiSearch  className='icon'/>
              <div className='order'>
                <BsBucket className='icon' />
                <span className='item-center'>8</span>
              </div>
               <button className='btn'> <CgPhone className='icon' /> Contact </button> 
            </div>
        </nav>
    </div>
  )
}

export default Navbar