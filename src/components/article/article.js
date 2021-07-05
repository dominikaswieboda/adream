import * as React from 'react'
import Link from "gatsby-link";
import * as styles from './article.module.scss';
import Img from "gatsby-image";
export default function Article({image, date, title}) {
    return(
        <>
            <div className={styles.img}>
                <Img
                    fluid={image}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                />
            </div>
            <div className={styles.date}>
                <span>{date}</span>
            </div>
            <div className={styles.title}>
                <h3>{title}</h3>
            </div>
            <Link className={styles.link}>Więcej</Link>
        </>
    )
}