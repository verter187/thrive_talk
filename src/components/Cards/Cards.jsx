import React from 'react';
import s from "./Cards.module.sass"
import CardItem from '../CardItem/CardItem'

export default function Cards() {
    const cards = [
        {id:1, title:'Годовое ТО', description: 'очень люблю!', 
            style: {width: "480px", height: "480px", background:"#22356F"}},  
        {id:2, title:'Выравнивание колес', description: 'катаюсь редко!', 
            style: {width: "480px", height: "480px", background:"#0052C1"}} ,
        {id:3, title:'Настройка переключателей', description: 'катаюсь часто!', 
            style: {width: "480px", height: "480px", background:"#76B58B"}} 
    ];

    const showDescription = description => {
        console.log(description);
    }

    return (
        <div className={s.cards}>    
        {            
            cards.map(t => <CardItem             
            key={t.id}
            {...t} showDescription={showDescription}/>)
        }    
        </div>
        )    
};