import './Thumbail.scss'
import menu1 from '../../assets/pngwing 3.png'
import menu2 from '../../assets/pngwing 4.png'
import menu3 from '../../assets/pngwing 6.png'
import menu4 from '../../assets/pngwing 7.png'
const Thumbail = () => {
  return (
    <div className='thumbail-container'>
        <div className="card grid">
            <div className="card-items gird">
                <div className="sec-image">
                    <img src={menu2} alt="" />
                </div>
                <h3 className='title-menu'>Main Dish</h3>
                <span >(Main Dish)</span>
            </div>

            <div className="card-items gird">
                <div className="sec-image">
                    <img src={menu3} alt="" />
                </div>
                <h3 className='title-menu'>Break Fast</h3>
                <span >(12 break fast)</span>
            </div>

            <div className="card-items gird">
                <div className="sec-image">
                    <img src={menu1} alt="" />
                </div>
                <h3 className='title-menu'>Dessert</h3>
                <span >(48 dessert)</span>
            </div>

            <div className="card-items gird">
                <div className="sec-image">
                    <img src={menu4} alt="" />
                </div>
                <h3 className='title-menu'>Browse All</h3>
                <span >(255 Items)</span>
            </div>
        </div>
    </div>
  )
}

export default Thumbail