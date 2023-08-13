import React from 'react'
import './Header.css'

const Header = () => {
  const headImg = "http://localhost/R53/React/finalproject/src/head.webp";
  return (
    <>
      <main>
        <section id="banner">
          <img src={headImg} alt="Banner Image" />
          <div className="overlay">
            <h1>Welcome to Our Car Selling Website</h1>
            <p>Find your perfect car today.</p>
            <a href="#featured-cars" className="button">Featured Cars</a>
          </div>
        </section>

      </main>

    </>
  )
}
export default Header;
