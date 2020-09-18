import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './places.css'

const Places = (props) => {
    const { name, id } = props.place;
    let location = useLocation();
    return (
        
            
        <Link to={`/singlePlaceDetails/${id}`} className="col-md-4 place-box"  > 
            
                <h1 className="text-white text-botto">{name}</h1>
                
        </Link>
        
    );
};

export default Places;
