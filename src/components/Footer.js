import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>

      <footer>

        <div class="footer-wrapper ">
          <div class="footer-section mt-4">
            <h3 class="text-warning">About Us</h3>
            <p>We are a leading car dealership that specializes in high-quality, pre-owned vehicles.</p>
            <p>Visit us today and find your dream car at an unbeatable price!</p>
          </div>
          <div class="footer-section">
            <h3 class="text-warning">Useful Links</h3>
            <ul>
              <li><a href="#">Cars for Sale</a></li>
              <li><a href="#">Sell Your Car</a></li>
              <li><a href="#">Financing Options</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3 class="text-warning">Contact Us</h3>
            <p>123 Main Street</p>
            <p>Anytown, USA 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@carsellingwebsite.com</p>
          </div>
        </div>
      </footer>


    </>
  )
}
export default Footer;
