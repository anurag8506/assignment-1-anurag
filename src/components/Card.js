import React from 'react'
import image41 from './41.png';
import image42 from './42.png';

function Card() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* Part 1 */}
      <div style={{ marginLeft: '20px', marginRight: '20px' }}>
        <p style={{ paddingLeft: '40px',fontSize: '34px' , fontWeight: 'bold', marginBottom: '10px',}}>The Times of India</p>
        <p style={{ paddingLeft: '140px'}}>India | Hindi</p>
        <button style={{ display: 'flex', alignItems: 'center',
    width: '380px',
    height: '49.91px',
    top: '840px',
    left: '158px',
    borderRadius: '43.85px',
    backgroundColor: '#2BC48C',}}>
          <img
            src={image42}
            alt="Page View"
            style={{
                alignItems: 'center',
                paddingLeft: '100px',
              }}
              
          />
        
        </button>
      </div>

      {/* Part 2 */}

    <div style={{ flex: 1 }}>
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '405px',
          height: '52px',
          borderRadius: '60px',
          backgroundColor: '#EEEEEE',
          marginLeft: '120px'
        }}
      >
        <img
          src={image41}
          alt="TheReadWhere App"
          style={{ width: '100px', height: '30px', marginRight: '40px', paddingLeft: '100px' }}
        />
        Open This issue in <br/>
       TheReadWhere App
      </button>
    </div>


    </div>
  );
}

export default Card;
