import React, { useEffect, useState } from 'react';
import fakeHotels from '../../FakePlaces/fakeHotels';
import GoogleMap from '../Googlemap/GoogleMap';
import './SelectHotel.css';
import Hotel from '../Hotel/Hotel';
import { useParams } from 'react-router-dom';

const SelectHotel = () => {

    const { placeName, Latitude, Longitude } = useParams();


    const allhotels = fakeHotels;
    

    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const hotelsList = allhotels.map(hotel => hotel);
       

        setHotels(hotelsList);

        
    }, [])
    
    return (


        <section className="hotel-map">
            <div className="container">
                
                <div className="row">
                    <div className="col-md-6 offset-md-3 heading" >
                        <h1 className="tex-center">Stay in {placeName}</h1>
                        
                    </div>
                </div>
                
                <div className="row">
                    
                    <div className='col-md-6  align-items-center'>
                    {
                        hotels.map(hotel => <Hotel hotel={hotel}></Hotel>)
                    }
                    </div>
                    <div className='col-md-6'>
                    <GoogleMap  Latitude={Latitude} Longitude={Longitude}></GoogleMap>
                    </div>
                </div>
            </div>
        
        </section>
            
            
        


    );
};

export default SelectHotel;
