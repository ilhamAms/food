import "./Menu.scss";
import { AiFillStar, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import salad1 from "../../assets/Fattoush salad.png";
import salad2 from "../../assets/Vegetable salad.png";
import salad3 from "../../assets/Egg salad.png";
const Menu = () => {
  return (
    <div className="menu-container">
      <div className="container">
        <span className="text-red">Special Dishes</span>
       <div className="flex item-center head">
       <h1 className="text-head">
          Standout Dishes <br /> From Our Menu
        </h1>
        <div className="next-prev flex">
            <div className="prev item-center">
              <GrFormPrevious  className='icon '/>
            </div>
            <div className="next item-center">
              <GrFormNext className='icon' />
            </div>
        </div>
       </div>

        <div className="card-salad grid">
          <div className="card">
            <div className="sec-image">
              <img src={salad1} alt="" />
            </div>
            <div className="text grid">
              <span className="text-sub-head title">Fattoush salad</span>
              <span className="text-small">Description of the item</span>
              <div className="price flex-center">
                <h4 className="text-sub-head">
                  <span>$</span> 24.00
                </h4>
                <div className="rating flex-center">
                  <AiFillStar className="icon" />{" "}
                  <span className="number-rating">4.9</span>
                </div>
              </div>
            </div>
            <div className="green-heart item-center">
              <AiFillHeart className="icon" />
            </div>
          </div>

          <div className="card">
            <div className="sec-image">
              <img src={salad3} alt="" />
            </div>
            <div className="text grid">
              <span className="text-sub-head title">Egg vegi salad</span>
              <span className="text-small">Description of the item</span>
              <div className="price flex-center">
                <h4 className="text-sub-head">
                  <span>$</span> 23.00
                </h4>
                <div className="rating flex-center">
                  <AiFillStar className="icon" />{" "}
                  <span className="number-rating">4.9</span>
                </div>
              </div>
            </div>
            <div className="green-heart item-center">
              <AiOutlineHeart className="icon" />
            </div>
          </div>

          <div className="card">
            <div className="sec-image">
              <img src={salad3} alt="" />
            </div>
            <div className="text grid">
              <span className="text-sub-head title">Egg vegi salad</span>
              <span className="text-small">Description of the item</span>
              <div className="price flex-center">
                <h4 className="text-sub-head">
                  <span>$</span> 23.00
                </h4>
                <div className="rating flex-center">
                  <AiFillStar className="icon" />{" "}
                  <span className="number-rating">4.9</span>
                </div>
              </div>
            </div>
            <div className="green-heart item-center">
              <AiOutlineHeart className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
