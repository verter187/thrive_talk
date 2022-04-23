
import React from "react";
import s from './Input.module.sass';

export default function Input({children, ...props}) {
    return (        
        <input  {...props}  className={s.btn}>
        {children}</input>
    )
}