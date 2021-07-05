import * as styles from "./progressBar.module.scss";
import React from "react";

export default function ProgressBar({animation, currentSlide, totalSlide}) {
    return (
        <div className={styles.progressBar}>
            <span>{currentSlide < 10 ? `0${currentSlide}` : currentSlide}</span>
            <span className={styles.progress}>
                <span
                    className={animation ? `${styles.progressStatus} ${styles.progressAnimation}` : styles.progressStatus}></span>
            </span>
            <span>{totalSlide < 10 ? `0${totalSlide}` : totalSlide}</span>
        </div>
    )
}