import React from 'react';
import { Typography } from '@mui/material';
import "./Pages.css";

const HomePage = () => {
  const containerStyle = {
    backgroundImage: "url('https://t4.ftcdn.net/jpg/01/98/50/63/360_F_198506301_zS7IDI4YU7kW0zFVagjTwl8AVI7lZvjP.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    // height: '100%',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: '16px',
    // color: 'white',
  };

  return (
    <div className='homepage'
     style={containerStyle}
    >
    <div id='block1'>
      <Typography variant="h3" align="center" gutterBottom>
        Welcome to Our Food Stall!
      </Typography>
      <Typography variant="h5" align="center">
        We offer a wide variety of delicious dishes. Visit us today!
      </Typography>
      </div>
    </div>
  );
}

export default HomePage;

