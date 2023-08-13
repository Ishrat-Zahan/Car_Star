import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Body = () => {

  const carImg = "http://localhost/R53/React/finalproject/src/assets/carimg/"
  useEffect(() => {
    readData();
  }, []);

  const [data, setData] = useState([]);

  // const handleDetails = (id) => {
  // alert(id);
  // }

  const readData = () => {
    fetch('http://localhost/r53/React/finalproject_2/src/api/carapi.php')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.log('An error occurred:', error);
      });
  }

  return (
    <>
      <div className="row p-2">
        {data.map(p => (
          <div key={p.id} style={{ height: '450px' }} className="card col-md-3 mb-3">
            <div style={{ height: '168px' }}>
              <img height="100%" width="100%" src={carImg+p.images} className="card-img-top" alt="..." />
            </div>
            <div className="card-body mt-3">
              <h5 className="card-title">{p.title}</h5>
              <div>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div>
              <h5 className="ms-2 mb-2">{p.price}</h5>
            </div>
            <div className="text-center">
              <Link to={`/single/${p.id}`} className="btn btn-dark mb-4 bg-color">Details</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Body;
