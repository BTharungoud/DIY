import React from 'react'
import { Stack,Button } from '@mui/material'
import UserNavbar from '../Navbar/UserNavbar'
import "./Style.css"
export default function Userorder() {
  let total = localStorage.getItem("Total");
    const handlesubmit = () =>{
        alert("Thankyou for choosing us🥰, Your payment is sucessfull collect your order.");
    }
  return (
    <>
    <div className='container'>
    <UserNavbar/>
    <div className='paymentcard'>
    <h5>plz pay your Order using the QR code.</h5>
    <div className='QRcode'>
        <img src="https://i.postimg.cc/Gmnn9JV1/Patym-QRscanner.png"></img>
    </div>
    <h5>Your total amount = ₹{total}/-</h5>
    <h5>After completing the payment Click the Button</h5>
    <Stack spacing={2} direction="row">
            <Button variant='outlined' sx={{color:"#163C55"}} onClick={handlesubmit} >Submit</Button>
    </Stack>

    </div>
    </div>
    </>
  )
}
