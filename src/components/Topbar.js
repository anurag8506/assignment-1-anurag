import React from 'react';
import image61 from './61.png';
import image62 from './62.png';

function Topbar() {
  return (
    <div
      style={{
        width: '1450px',
        backgroundColor: '#FFF',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#000',
      }}
    >
      {/* Left Side */}
      <p style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>Saturday, 9 September 2023</p>

      {/* Right Side */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Full Forecast */}
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <img
            src={image61}
            alt="Full Forecast"
            style={{ width: '18px', height: '18px', marginRight: '5px' }}
          />
          Full Forecast
        </div>

        {/* 43 C */}
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <img
            src={image62}
            alt="Temperature"
            style={{ width: '18px', height: '18px', marginRight: '5px' }}
          />
          43°C
        </div>

        {/* Telangana, India */}
        <p style={{ margin: '0' }}>|    Telangana, India</p>
      </div>
    </div>
  );
}

export default Topbar;
