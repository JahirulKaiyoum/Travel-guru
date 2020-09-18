import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './places.css'

const Places = (props) => {
    const { name, id } = props.place;
    let location = useLocation();
    return (
        
            
        // <div className="col-md-4 place-box" onClick={() => location.replace(`/singlePlaceDetails/${id}`)}> 
        //         <h1 className="text-white text-botto">{name}</h1>
        //     </div>
        <Link to={`/singlePlaceDetails/${id}`}><div className="col-md-4 place-box"> 
                <h1 className="text-white text-botto">{name}</h1>
                </div></Link>
           
            
        
    );
};

export default Places;
//<Link to={`/placeDetails/${placeId}`}></Link>