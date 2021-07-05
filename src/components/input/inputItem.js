import * as React from 'react';
import * as styles from './input.module.scss'
export default function InputItem({label, name, type= 'text',  error, ...props}) {
    return(
        <div className={styles.inputLayout}>
            <input
                name={name}
                id={name}
                className={styles.input}
                type={type}
                {...props}
            />
            <label htmlFor={name} className={styles.label}>
                {label}
            </label>
        </div>
    )
}