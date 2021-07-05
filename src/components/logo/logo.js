import * as React from 'react';
import * as styles from "./logo.module.scss";

export default function Logo({classname}) {
    return(
        <div className={`${styles.logo} ${classname}`}>
            <span>Logo</span>
        </div>
    )
}