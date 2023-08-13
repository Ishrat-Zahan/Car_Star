import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';


function Single() {
    //   const [data, setData] = useState([])
    const { id } = useParams();
    useEffect(() => {
        readData();
    }, []);

    const [data, setData] = useState([]);

    // const handleDetails = (id) => {
    // alert(id);
    // }

    const readData = () => {
        fetch('http://localhost/R53/React/finalproject/src/api/carapi.php')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);

            })
            .catch(error => {
                console.log('An error occurred:', error);
            });
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    const product = data.find(p => p.id === id);

    if (!product) {
        return <div>Product not found.</div>;
    }

    const dimage = 'http://localhost/R53/React/finalproject/src/assets/carimg/';

    return (
        <>
            <div className="container contmargin">

                <div className='row'>
                    <div className="col-6 ">
                        <img
                            style={{ height: '100%', width: '100%' }}
                            src={dimage + product.images}
                            className="card-img-top dimage"
                            alt="..."
                        />
                    </div>
                    <div className="col-6 ">
                        <h3>{product.title}</h3>
                        <p>Price:{product.price}</p>
                        <p>{product.description}</p>
                        <div>
                        {/* <button className='btn btn-warning'>Contact Now</button> */}
                        <Link to="/contact" className='btn btn-warning'>Contact Now</Link>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Single
