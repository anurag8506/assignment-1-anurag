import React from 'react'
import image10 from './10.png';


function Filter() {
    return (
      <div style={{ borderTop: '2px solid #ccc', borderBottom: '2px solid #ccc', padding: '10px', marginBottom: '20px' ,marginTop: '40px'}}>
        {/* Top border line */}
       
  
        {/* Content */}
        <div style={{ display: 'flex', alignItems: 'center',justifyContent: 'space-between', marginTop: '10px', width: '1450px', marginLeft: '20px' }}>
          {/* Text */}
          <div style={{ display: 'flex', marginRight: '20px' }}>
            <p style={{ margin: '0', fontSize: '16px', marginRight: '100px', color: 'red' }}>All</p>
            <p style={{ margin: '0', fontSize: '16px', marginRight: '100px' }}>News</p>
            <p style={{ margin: '0', fontSize: '16px', marginRight: '100px' }}>Entertainment</p>
            <p style={{ margin: '0', fontSize: '16px', marginRight: '100px' }}>Sports</p>
            <p style={{ margin: '0', fontSize: '16px', marginRight: '100px' }}>Lifestyles</p>
            <p style={{ margin: '0', fontSize: '16px', marginRight: '100px' }}>Marketplaces</p>
            <p style={{ margin: '0', fontSize: '16px' }}>Fintech</p>
          </div>
  
          {/* Image */}
          <img
            src={image10}
            alt="image10"
            style={{
                width: '283px',
                height: '37px',
                
                
            }}
          />
        </div>
  
        {/* Bottom border line */}
       
      </div>
    );
  }
  
  export default Filter;