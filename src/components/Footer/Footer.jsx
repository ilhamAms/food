import './footer.scss'
import f from '../../assets/F.png'
import logo from '../../assets/oodi.png'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram, AiFillTwitterCircle, AiFillYoutube} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='container footer-container'>
        <div className='footer'>
            <div className="first">
                <div className='logo flex'>
                  <div className='f item-center'>
                  <img src={f} alt=""  />
                  </div>
                    <img src={logo} alt="" />
                </div>
                <span className='text-small'>
                 Savor the artistry where every dish is a culinary masterpiece
                </span>
            </div>

            <div className="second">
                <ul>
                    <h4>Useful links</h4>
                    <li>About us</li>
                    <li>Events</li>
                    <li>Events</li>
                    <li>FAQ</li>
                </ul>
             
            </div>

            
            <div className="third">
                <ul>
                    <h4>Home</h4>
                    <li>Offers</li>
                    <li>Menus</li>
                    <li>Events</li>
                    <li>Reservation</li>
                </ul>
               
            </div>

            
            <div className="fourth">
                <ul>
                    <h4>Contact Us</h4> 
                    <li>example@email.com</li>
                    <li>+64 958 248 966</li>
                    <li>Social media</li>
                    
                </ul>
               
            </div>
        </div>
        <div className='bottom-footer  '>
            <div className="group-contact flex item-center">
                <div className="contact ">
                  <BsFacebook className='icon' />
                </div>
                <div className="contact">
                  <AiFillInstagram className='icon' />
                </div>
                <div className="contact">
                  <AiFillTwitterCircle className='icon' />
                </div>
                <div className="contact">
                  <AiFillYoutube className='icon' />
                </div>
            </div>
            <div className="copy-right">
                <span className='text-body text-small'>Copyright 2023 Dscode | All rights reserved</span>
            </div>
        </div>
    </div>
  )
}

export default Footer