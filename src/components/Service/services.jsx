import './services.scss'
import { cardService } from '../constant/data'
const Services = () => {
  return (
    <div className='container service-container'>
       
       <div className="service flex-center">
       
        <div className="text-secvice">
            <span className="text-red">Our Story & Services</span>
            <h1 className="text-head">Our Culinary Journey <br /> And Services</h1>
            <span className='text-body-service'>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</span>
            <button className="btn">Explore</button>
        </div>
     
        <div className="card-service grid">
            {
                cardService.map((cardServices) => {
                    return (
                        <div className='card-item' key={cardServices}>
                           <div className="sec-image">
                            <img src={cardServices.img} alt="" />
                           </div>
                           <h1 className='card-title'>{cardServices.title}</h1>
                           <span className='text-body'> {cardServices.description} </span>
                        </div>
                    )
                })
            }
        </div>
       
       </div>

    </div>
  )
}

export default Services