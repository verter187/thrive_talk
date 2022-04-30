import React from 'react';
import s from "./Menu.module.sass"
import Button from '../UI/Button/Button' 
import MenuItem from '../UI/MenuItem/MenuItem' 

export default function Menu() {     
     
    return (
        <div className={s.nav}>
        <div className={s.logo}/>
        <div className={s.elem_group}>
            <MenuItem style={{width: "80px", height: "40px"}}>О нас</MenuItem>
            <MenuItem style={{width: "80px", height: "40px"}}>Услуги</MenuItem>
            <MenuItem style={{width: "80px", height: "40px"}}>Аренда</MenuItem>            
        </div>
        <Button style={{width: "150px", height: "50px"}}>Связаться</Button>
    </div>     
    )
};



 
