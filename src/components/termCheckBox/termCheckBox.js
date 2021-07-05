import React from 'react';
import * as styles from './termCheckBox.module.scss';

export function TermCheckBox({children, name, checked, onchange, ...props}) {

    return (
        <div className={styles.checkbox}>
            <input onChange={onchange} type="checkbox" id={name} name={name} checked={checked} {...props} />
            <label htmlFor={name}>{children}</label>
        </div>);
}