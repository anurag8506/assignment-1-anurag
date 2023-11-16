import React from 'react';
import image1 from './1.png';
import image2 from './2.png';
import image3 from './3.png';
import image4 from './4.png';
import image5 from './5.png';
import image6 from './6.png';

const Navbar = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img
        src={image1}
        alt="Image 1"
        style={{
          width: '1497px', 
          height: '14px',
          marginTop: '10px'
        }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%', 
        }}
      >
        {/* Group image4, image5, and image6 on the left */}
        <div style={{ textAlign: 'center' , paddingTop: '10px',}}>
          <img
            src={image4}
            alt="image4"
            style={{
              width: '72px',
              height: '18.89px',
              marginRight: '10px', 
              paddingLeft: '10px',
              paddingRight: '30px'
            }}
          />
          <img
            src={image5}
            alt="image5"
            style={{
              width: '85px',
              height: '19px',
              marginRight: '10px', 
            }}
          />
          <img
            src={image6}
            alt="image6"
            style={{
              width: '49px',
              height: '19px',
              paddingLeft: '30px',
            }}
          />
        </div>

        {/* Center image2 */}
        <div style={{paddingTop: '10px'}}>
          <img
            src={image2}
            alt="image2"
            style={{
              width: '211px',
              height: '49px',
            }}
          />
          <div style={{ fontWeight:'bold' , textAlign: 'center', paddingLeft: '120px' }}>
      National Edition
    </div>
        </div>

        
        <div>
          <img
            src={image3}
            alt="image3"
            style={{
              width: '491px',
              height: '34.82px',
              borderRadius: '29.09px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
