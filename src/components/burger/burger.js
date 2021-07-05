import React from "react";
import * as styles from './burger.module.scss';

const Burger = ({ open, setOpen, ...props }) => {
    const isExpanded = open ? true : false;

    return (
        <button
            className={open ? `${styles.burger} ${styles.isActive}` : `${styles.burger}`}
            aria-label="Toggle menu"
            aria-expanded={isExpanded}
            open={open}
            onClick={() => setOpen(!open)}
            {...props}
        >
            <span />
            <span />
            <span />
        </button>
    );
};

export default Burger;