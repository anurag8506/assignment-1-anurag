import React from 'react';
import image51 from './51.png';
import image52 from './52.png';
import image53 from './53.png';

function Footer() {
  return (
    <div
      style={{
        width: '1450px',
        height: '55px',
        backgroundColor: '#FFFFFF',
        marginTop: '40px',
        marginLeft: '20px',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid gray',
        boxSizing: 'border-box',
      }}
    >
      {/* Images */}
      <img src={image51} alt="Image 51" style={{ width: '68px',
             height: '40px',
             borderRadius:'10px',
             paddingRight: '40px'
 }} />
      <img src={image52} alt="Image 52" style={{ width: '11px', height: '18px', marginRight: '15px' ,
     color: '#CFCFCF'
    }} />
   <div style={{ position: 'relative' }}>
        <img src={image53} alt="Image 53" style={{ width: '150px', height: '50px', marginRight: '10px' }} />
        <p
          style={{
            position: 'absolute',
            top: '50%', 
            left: '50%',
            transform: 'translate(-50%, -50%)',
            margin: '0',
            padding: '5px',
            fontSize: '11px',
            color: '#fff',
            backgroundColor: ' #2BC48C',
            
          }}
        >
          A1 Font Page
        </p>
        </div>

      {/* Text */}
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        {Array.from({ length: 9 }, (_, index) => (
          <p key={index} style={{ margin: '0', padding: '20px', fontSize: '14px', color: '#7B7B7B' }}>
            A{index + 2} Font Page
          </p>
        ))}
      </div>
    </div>
  );
}

export default Footer;
