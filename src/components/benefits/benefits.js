import * as React from 'react';
import Container from "../../layouts/container/container";
import * as styles from './benefits.module.scss';
import {benefitsData} from "./benefitsData";
import {AiOutlineArrowRight} from 'react-icons/ai';
import {Button} from "../button/button";
import * as buttonStyles from '../button/button.module.scss';

export default function Benefits() {
    return (
        <section className={styles.benefits}>
            <Container>
                <div className={styles.items}>
                    <div className={`${styles.item} ${styles.itemHeading}`}>
                        <h2>Lorem ipsum dolor sit amet, conse</h2>
                    </div>
                    {benefitsData.map((benefit, index) => {
                        return (<div key={index} className={styles.item}
                                     data-sal="zoom-in"
                                     data-sal-duration="1000"
                                     data-sal-easing="ease"
                            >
                                <div className={styles.itemIcon}>
                                    {benefit.icon}
                                </div>
                                <h3>{benefit.title}</h3>
                            </div>
                        )
                    })}
                </div>
                <Button
                    to={"#"}
                    className={`${buttonStyles.btn} ${buttonStyles.btnSecondary} ${buttonStyles.btnHover} ${styles.benefitBtn}`}>
                    Dowiedz się więcej
                    <span>
                            <AiOutlineArrowRight/>
                        </span>
                </Button>
            </Container>
        </section>
    )
}