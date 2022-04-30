import React from 'react';
import s from "./Header.module.sass"
 
export default function Header() {     
     
    return (<div className={s.header_continer}>

    <div className={s.header_text}>
        <div className={s.title}>Что мы предлагаем</div>
        <div className={s.description}>
            В нашей мастерской можно выполнить комплексное 
            техническое обслуживание велосипеда, ремонт и 
            настройку всех его узлов, шиномонтажные работы. 
            Вовремя проведенное ТО велосипеда помогает избежать 
            многих проблем и дорогого ремонта.  Все работы 
            выполняем качественно и с душой. 
        </div>
    </div>
    <div className={s.header_photo}>
        
    </div>
    </div>)
};

 
