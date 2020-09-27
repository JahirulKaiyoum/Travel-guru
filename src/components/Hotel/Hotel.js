import React from 'react';
import GoogleMap from '../Googlemap/GoogleMap';
import './hotel.css'
const Hotel = (props ) => {
console.log(props);
    let { name, phone, address, image } = props.hotel;
    
    return (
        
        <div className="row">
            
                        <div className='col-md-6 hotel-content'>
                            <img src={image} alt="" className='img-fluid' />
                        </div>
                        <div className='col-md-6 ' >
                            <h4>{name}</h4>
                            <p>Address:{address}</p>
                            <p>Phone:{phone}</p>
                        </div>
                </div>
                   
    );
};

export default Hotel;


