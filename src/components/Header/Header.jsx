import './header.scss';
import { BsPlayFill } from 'react-icons/bs';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import recommend1 from '../../assets/reco1.png';
import recommend2 from '../../assets/reco2.png';
import img from '../../assets/Intersect.png';
const Header = () => {
    return (
        <div className='header-container'>
            <div className='container flex-center header'>

                <div className="left">
                    <div className="text">
                        <h1 className='text-head'>
                            Dive into Delights <br /> Of Delectable <span className='text-green'> Food </span>
                        </h1>
                        <p className='text-body'>
                            Where Each Plate Weaves a Story of Culinary <br /> Mastery and Passionate Craftsmanship
                        </p>

                        <div className="btn-group flex-center">
                            <button className='btn'>Order Now</button>
                            <div className='play flex-center'>
                                <span > Watch Video </span>
                                <div className='sec-play item-center'>
                                    <BsPlayFill className='icon' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="right">
                    <div className='sec-img'>
                        <div className="rounded-bg"> </div>
                        <img src={img} alt="" />
                    </div>
                    <div className="recommend flex">
                        <div className='left flex'>
                            <img src={recommend1} alt="" />
                            <div className="recommend-menu grid">
                                <span className='text-head'> Spicy noodles </span>
                                <div className="star flex">
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='icon' />
                                    <AiOutlineStar className='icon outline' />
                                    <AiOutlineStar className='icon outline' />
                                </div>
                                <h4 className='price'><span>$</span> 18</h4>
                            </div>
                        </div>
                        <div className="right flex">
                            <img src={recommend2} alt="" />
                            <div className="recommend-menu grid">
                                <span className='text-head'> Spicy noodles </span>
                                <div className="star flex">
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='icon' />
                                    <AiOutlineStar className='icon outline' />
                                    <AiOutlineStar className='icon outline' />
                                </div>
                                <h4 className='price'><span>$</span> 18</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header