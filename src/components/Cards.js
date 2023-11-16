import React from 'react'

import image11 from './11.png';
import image12 from './12.png';
import image13 from './13.png';
import image31 from './31.png';
import image32 from './32.png';
import image33 from './33.png';
import image34 from './34.png';
import image81 from './81.png';


function Cards() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      
      <div style={{ display: 'flex', flexDirection: 'column', 
       textAlign: 'center', position: 'relative', marginTop: '10px', paddingTop: '50px',paddingLeft: '0px', marginLeft: '0px' }}>
      <img
        src={image81}
        alt="Image81"
        style={{
          width: '155px',
          height: '20px',
          paddingLeft: '10px',
         
        }}
      />
      <img
        src={image11}
        alt="Image11"
        style={{
            width: '355px',
            height: '350px',
              top: '362px',
             left: '120px',

            
        }}
      />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', 
      alignItems: 'center', 
      textAlign: 'center', 
      position: 'relative',marginTop: '10px' , 
      paddingTop:'50px'

      
      }}>
      <p style={{ margin: '5px', fontSize: '20px' , fontWeight: 'bold', marginBottom: '10px'}}>September 2023</p>
      <img
        src={image12}
        alt="Image 12"
        style={{
          width: '100%',
          height: 'auto', 
        }}
      />
       <div
      style={{


        position: 'absolute',
        top: '55%' ,
        left: '59px',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#2BC48C',
      color: 'white',
      padding: '5px',
      borderRadius: '5px',
      zIndex: '1', 
      }}
    >
      11
    </div>

      {/* Images 31, 32, 33,34 */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <img
          src={image31}
          alt="Image31"
          style={{
            width: '23px', 
            height: '33px', 
            paddingTop: '15px',
            marginRight: '70px',
          }}
        />
        
        <img
          src={image32}
          alt="Image32"
          style={{
            width: '23px', 
            height: '33px', 
            paddingTop: '15px',
            marginRight: '70px',
          }}
        />
        <img
          src={image33}
          alt="Image33"
          style={{
            width: '23px', 
            height: '33px', 
            paddingTop: '15px',
            marginRight: '70px',
          }}
        />
        <img
          src={image34}
          alt="Image34"
          style={{
            width: '23px', 
            height: '33px', 
            paddingTop: '15px',
          }}

        />
      </div>
    </div>
      <img
        src={image13}
        alt="Image13"
        style={{
            width: '750px',
            height: '420px',
            top: '454px',
            left: '970px',
            marginRight: '20px'
            
        }}
      />
    </div>
  );
}

export default Cards;
