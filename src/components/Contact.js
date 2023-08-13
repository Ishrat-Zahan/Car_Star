
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const banner1 = "http://localhost/r53/React/finalproject_2/src/assets/b2.jpg"
  const banner2 = "http://localhost/r53/React/finalproject_2/src/assets/b3.jpg"
  const banner3 = "http://localhost/r53/React/finalproject_2/src/assets/b6.jpg"


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [messege, setMessege] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost/R53/React/finalproject/src/api/createcontact.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, messege }),
    })
      .then((response) => response.json())
      .then((data) => {

        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  return (
    <>
      <div className='container'>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img style={{ objectFit: 'cover' }} src={banner1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img style={{ objectFit: 'cover' }} src={banner2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img style={{ objectFit: 'cover' }} src={banner3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <main>
          <section id="contact-us">
            <div className="container">
              <h1 style={{ textDecoration: 'underline' }} className="text-warning text-center">Contact Us</h1>

              <p>Need to get in touch with us? Fill out the form below and we'll get back to you as soon as possible.</p>


              <form onSubmit={handleFormSubmit} id='contact'>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required value={name}
                  onChange={e => setName(e.target.value)} />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required value={email}
                  onChange={e => setEmail(e.target.value)} />

                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required value={phone}
                  onChange={e => setPhone(e.target.value)} />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="messege" rows="5" required value={messege}
                  onChange={e => setMessege(e.target.value)}></textarea>

                <input className="btn btn-warning" type='submit'/>
              </form>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Contact;
