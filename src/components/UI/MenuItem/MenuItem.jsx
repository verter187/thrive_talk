
import React from "react";
import s from './MenuItem.module.sass';

export default function MenuItem({children, ...props}) {
    return (        
        <li  {...props}  className={s.li_item}>
        {children}</li>
    )
}