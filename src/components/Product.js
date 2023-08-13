import React from 'react'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

 const Product = () => {
  return (
    <>
    <div className='container'>
        <div>
          <Header />
        </div>
        <div className='mt-4'>
          <Body />
        </div>
        <div>
        <Footer />
        </div>
      </div>
    </>
  )
}
export default Product;
