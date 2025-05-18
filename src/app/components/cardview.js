import { redirect } from 'next/navigation'
import { Router } from 'next/router';

const Cardview = ({ prod }) => {
  return (

    <div className="card shadow h-100 push-down" style={{minWidth: "8rem", maxWidth: "15remzsdesx"}} role="button">
      <img src={prod.image} alt="Image product" className="card-img-top" />
      <div className="card-body">
        <span className="card-title fw-bold">{prod.title}</span>
      </div>
      <div className='card-footer'>
        <p className="card-text">Price: <strong>₹ {prod.price}</strong></p>
      </div>
    </div>

  )
};

export default Cardview;
