import React from 'react'
import './review.scss'
import {AiFillStar} from 'react-icons/ai'

import img from '../../assets/profile.png'
import bg from '../../assets/bg.png'
import caption from '../../assets/caption.png'
import pr1 from '../../assets/pr1.png'
import pr2 from '../../assets/pr2.png'
import pr3 from '../../assets/pr3.png'

export const Review = () => {
  return (
    <div className='review-container container'>
        <div className="tesmonials flex-center">
            <div className="sec-image">
                <img src={img} alt="" />
                <div className='bg-green'><img src={bg} alt="" /></div>
                <div className='caption'>
                    <img src={caption} alt="" />
                    <p>Our Best Chef 😁</p>
                </div>
            </div>
            <div className="text">
                <span className='text-red'>Testimonials</span>
                <h1 className='text-head'>What Our Customers <br /> Say About Us</h1>
                <p className='text-body'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>

                <div className='sec-review flex '>
                    <div className="img-group flex-center">
                        <img src={pr3} alt="" />
                        <img src={pr2} alt="" />
                        <img src={pr1} alt="" />
                    </div>
                    <div className='text-review'>
                        <span>Customer Feedback</span>
                        <div className='review-rating flex-center'>
                            <AiFillStar className='icon' />
                            <span className='rating'>4.9</span>
                            <span className='rating-caption'>(18.6k Reviews)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
