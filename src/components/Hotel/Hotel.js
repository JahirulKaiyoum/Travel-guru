import React from 'react';

const Hotel = (props ) => {
console.log(props);

    let { name, phone, address, image } = props.hotel;
    
    return (
        <section>
        <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className='row'>
                    <div className='col-md-6'>
                    <img src={image} alt="" className='img-fluid' />
                    </div>
                    <div className='col-md-6'>
                        <h1>Hotel:{name}</h1>
                        <p>Address:{address}</p>
                        <p>Phone:{phone}</p>
                    </div>
                </div>
                </div>
                <div className="col-md-6">
                </div>
        </div>
    </div>
            
        </section>
    );
};

export default Hotel;

