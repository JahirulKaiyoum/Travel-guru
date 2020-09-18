import React, { useEffect, useState } from 'react';
import fakeHotels from '../../FakePlaces/fakeHotels';

import Hotel from '../Hotel/Hotel';

const SelectHotel = () => {

    const allhotels = fakeHotels;
    

    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const hotelsList = allhotels.map(hotel => hotel);
        //.log(hotelsList);

        setHotels(hotelsList);

        
    }, [])
    
    return (
        <div>
            {
                hotels.map(hotel =><Hotel hotel={hotel}></Hotel>)
            }
        </div>
    );
};

export default SelectHotel;