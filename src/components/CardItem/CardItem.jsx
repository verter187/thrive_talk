import React from 'react';
import s from "./CardItem.module.sass"
import Button from '../UI/Button/Button' 

export default function CardItem({id, title, description, style, showDescription}) {     
     
    return (
    <div style={style} className={s.item} id={id}>
        <div className={s.underline}></div>    
        <div className={s.title}>
            {title}
        </div>
        <div className={s.button}>
            <Button style={{width: "150px", height: "50px"}} 
                onClick={()=>showDescription(description)}>Подробнее</Button>
        </div>    
    </div>)
};

 
