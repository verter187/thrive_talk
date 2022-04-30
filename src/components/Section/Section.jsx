import React from 'react';
import s from "./Section.module.sass"
 
export default function Section() {     
     
    return (<div className={s.section_continer}>

        <div className={s.section_text}>
            Приехав к нам однажды, многие наши клиенты становятся 
            постоянными, а часть из них даже друзьями. А также в 
            нашей мастерской можно отремонтировать 
            электросамокат и электровелосипед.         
        </div>
        
        <div className={s.underline}></div> 
    
    </div>)
};

 
