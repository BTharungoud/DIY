import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./MenuUser.css"
import UserNavbar from '../Navbar/UserNavbar';
import { Button } from '@mui/material';
const API_BASE = "http://localhost:5000";

export default function MenuUser() {
    const [usermenu, setUsermenu] = useState([]);
    const [selected, setSelected] = useState(false);
    const [total, setTotal] = useState(0);
    // const [quantity, setQuantity] = useState([]);

    const navigate = useNavigate();

    // useEffect(() => {

    // }, [usermenu])

    const getUserMenu = async () => {
       const res = await fetch(API_BASE + "/menu/users",{
        method:"GET",
        headers:{
            "content-Type":"application/json"
        }
       })
       let data = await res.json();
       setUsermenu(data);
       setSelected(true);
    }
    if(selected===false){ getUserMenu();}

    const selectedmenu = async (item) => {
        const obj = usermenu.find(ele=>ele._id===item._id)
        console.log(obj);
        obj.quantity++;
        setTotal(prevTotal => prevTotal + item.itemCost);
    }
    const removeItem= async(item)=>{
        const obj = usermenu.find(ele=>ele._id===item._id)
        if(item.quantity>=1){
            obj.quantity--;
           setTotal(prevTotal => prevTotal - obj.itemCost);
        }
        else{
            console.log("else");
        }
    }
    const submitOrder = async() =>{
        const username = localStorage.getItem("Username");
        let array = [];
        usermenu.map(item=>{
            if(item.quantity>=1)array.push(item)
        })
        localStorage.setItem("Total",total);
        const data = await fetch(API_BASE+"/orders",{
            method:"POST",
            headers:{
            "content-Type":"application/json"
            },
            body:JSON.stringify({
                username : username,
                SelectedItems : array
            })
        })
        navigate('/Userorder');
    }

    return (
        <>
            <div className='Usermenu'>
                <UserNavbar/>
                <h4>hey, user here is the menu for the day.</h4>
                <div className='userMenu'>
                    {usermenu.map((item) => (
                        <div style={{display:"flex"}}>
                        <div className={(item.quantity>=1) ? "selected" : "items"} key={item._id} onClick={() => selectedmenu(item)}>

                            <div className='text' style={{ width: "85%" }}>
                                {item.itemName}       cost = ₹{item.itemCost}/-
                            </div>
                            <div className='qunatitybox'>
                                <p style={{ fontSize: "23px" }}>Q:-</p>
                                    <p style={{ fontSize: "23px" }}>{item.quantity}</p>
                            </div>
                        </div>
                        <Button variant='contained' style={{margin:"10px",marginTop:"0"}} onClick={()=>removeItem(item)} >-</Button>
                        </div>
                    ))}
                    {usermenu.length === 0 ? (
                        <div className='noitems' style={{ color: "#F8EBE3" }}>Sorry no items for the day.☹️</div>
                    ) : ""
                    }

                </div>

                <h5 style={{ color: "white" }}>Total =₹{total}/-</h5>
                <Button onClick={()=>submitOrder()}>Order</Button>
            </div>
        </>
    )
}
