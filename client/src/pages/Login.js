import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./Pages.css";
import { Link } from 'react-router-dom';

export default function Login() {
    const containerStyle = {
        backgroundImage: "url('https://t4.ftcdn.net/jpg/01/98/50/63/360_F_198506301_zS7IDI4YU7kW0zFVagjTwl8AVI7lZvjP.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '95vh',
        maxHeight:"auto",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16px'
      };
    return (
        <div className="pagebox" sx={containerStyle}>
            <div className='signupcontainer'>
                <h3>Enter your credentials.</h3>
                <Box component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
                    noValidate
                    autoComplete="off"
                    className='formclass'
                >
                    <TextField id="outlined-basic" label="Username" variant="outlined" type='String' required={true} />
                    <TextField id="outlined-basic" label="Password" variant="outlined" type="password" required={true} />
                    <Stack spacing={2} direction="row">
                        <Button variant='outlined' sx={{color:"#163C55"}} >Login</Button>
                    </Stack>
                </Box>
                <div className="account">
                    <span>Don't have an account?</span>
                    <Link to="/register" style={{color:"#0C0703",'&hover':{color:"skyblue"}}}>Register</Link>
                </div>
            </div>
        </div>
    )
}