import './Catagoties.scss'
import Thumbail from '../Thumbail/Thumbail'
const Catagoties = () => {
  return (
    <div className='container container-categories'>
        <span className='text-red'>Customer Favorites</span>
        <h1 className='text-head'>Popular Catagories</h1>
        <Thumbail />
    </div>
  )
}

export default Catagoties