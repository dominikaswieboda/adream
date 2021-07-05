import * as React from 'react';
import Container from "../../layouts/container/container";
import * as styles from './offer.module.scss';
import {Button} from "../button/button";
import NextArrowIcon from "../../assets/icons/nextArrow.svg";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";
import * as buttonStyles from "../button/button.module.scss";
import Link from "gatsby-link";

export default function Offer() {
    const dataOffer = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "offer" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 770) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
    return (
        <section
            className={styles.offer}>
            <Container>
                <div className={styles.offerItems}>
                    <Link
                        to={'#'}
                        className={styles.offerItem}
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                    >
                        <div className={styles.offerWrapper}>
                            <Img
                                fluid={dataOffer.allFile.edges[2].node.childImageSharp.fluid}
                                objectFit="cover"
                                objectPosition="50% 50%"
                                style={{
                                    height: '100%'
                                }}
                            />
                        </div>
                        <div className={styles.offerItemContent}>
                            <div className={styles.offerCardInfo}>
                                <h3>Biuro</h3>
                                <p>od 1000zł/msc</p>
                            </div>
                            <Button
                                classname={`${buttonStyles.btn} ${buttonStyles.btnPrimary} ${buttonStyles.btnBeforeLeft}`}
                                children={<NextArrowIcon/>}
                            />
                        </div>
                    </Link>
                    <Link
                        to={'#'}
                        className={styles.offerItem}
                        data-sal="slide-left"
                        data-sal-duration="1000"
                        data-sal-easing="ease">
                        <div className={styles.offerWrapper}>
                            <Img
                                fluid={dataOffer.allFile.edges[3].node.childImageSharp.fluid}
                                objectFit="cover"
                                objectPosition="50% 50%"
                                style={{
                                    height: '100%'
                                }}
                            />
                        </div>
                        <div className={styles.offerItemContent}>
                            <div className={styles.offerCardInfo}>
                                <h3>Lorem<br/> ipsum</h3>
                                <p>od 500zł/msc</p>
                            </div>
                            <Button
                                classname={`${buttonStyles.btn} ${buttonStyles.btnPrimary} ${buttonStyles.btnBeforeLeft}`}
                                children={<NextArrowIcon/>}
                            />
                        </div>
                    </Link>
                    <Link
                        to={"#"}
                        className={`${styles.offerItem} ${styles.offerItemSmall}`}
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-easing="ease" >
                    >
                        <div className={styles.offerWrapper}>
                            <Img
                                fluid={dataOffer.allFile.edges[0].node.childImageSharp.fluid}
                                objectFit="cover"
                                objectPosition="50% 50%"
                                style={{
                                    height: '100%'
                                }}
                            />

                        </div>
                        <div className={styles.offerItemContent}>
                            <div className={styles.offerCardInfo}>
                                <h3>Biuro<br/>lorem</h3>
                                <p>od 100zł/msc</p>
                            </div>
                            <Button
                                classname={`${buttonStyles.btn} ${buttonStyles.btnPrimary} ${buttonStyles.btnBeforeLeft}`}
                                children={<NextArrowIcon/>}
                            />
                        </div>
                    </Link>
                    <Link
                        to={"#"}
                        className={`${styles.offerItem} ${styles.offerItemSmall}`}
                        data-sal="slide-left"
                        data-sal-duration="1000"
                        data-sal-easing="ease" >
                    >
                        <div className={styles.offerWrapper}>
                            <Img
                                fluid={dataOffer.allFile.edges[1].node.childImageSharp.fluid}
                                objectFit="cover"
                                objectPosition="50% 50%"
                                style={{
                                    height: '100%'
                                }}
                            />

                        </div>
                        <div className={styles.offerItemContent}>
                            <div className={styles.offerCardInfo}>
                                <h3>Biuro lorem ipsum Lorem</h3>
                                <p>od 100zł/msc</p>
                            </div>
                            <Button
                                classname={`${buttonStyles.btn} ${buttonStyles.btnPrimary} ${buttonStyles.btnBeforeLeft}`}
                                children={<NextArrowIcon/>}
                            />
                        </div>
                    </Link>
                </div>
            </Container>
        </section>
    )
}