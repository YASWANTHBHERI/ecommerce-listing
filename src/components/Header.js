import React from 'react';

const Header = () => {
  return (
    <header className='bg-customGreen text-white'>
      <div className='grid grid-cols-12'>
        <div className='col-span-3'></div>
        <div className='col-span-6 text-center'>Free Shipping on orders above 999/-</div>
        <div className='col-span-3'>Call us on: +91 98768 05120</div>
      </div>
    </header>
  );
};

export default Header;
