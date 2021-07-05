// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react"
// Import Swiper styles
import "swiper/swiper-bundle.css"
import "../../styles/theme/swiper.scss"
import SwiperCore, {Navigation, Autoplay, Pagination} from "swiper/core"

import React, {useRef, useState} from "react"
import * as buttonStyles from '../button/button.module.scss';
import * as styles from "./banner.module.scss"
import Img from "gatsby-image"
import {useStaticQuery, graphql} from "gatsby"
import PrevArrowIcon from "../../assets/icons/prevArrow.svg"
import NextArrowIcon from "../../assets/icons/nextArrow.svg"
import Container from "../../layouts/container/container";
import Form from "../form/form";
import ProgressBar from "../progressBar/progressBar";
import {Button} from "../button/button";
// Install Swiper modules
SwiperCore.use([Navigation,
    Autoplay,
    Pagination])

export default function Banner() {
    const [animation, setAnimation] = useState(false)
    const [currentSlide, setCurrent] = useState('');
    const [totalSlide, setTotal] = useState('');
    const data = useStaticQuery(graphql`
    query HeadingQuery {
      allFile(filter: { relativeDirectory: { eq: "banner" } }) {
        edges {
          node {
            base
            childImageSharp {
              fixed(width: 1920) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    return (
        <section className={styles.banner}>
            <div className={styles.bannerContent}>
                <Swiper
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    slidesPerView={1}
                    watchSlidesProgress={true}
                    pagination={{
                        "type": "custom",
                        renderCustom: function (swiper, current, total) {
                            setCurrent(current)
                            setTotal(total)
                        }
                    }}
                    navigation={{
                        prevEl: prevRef.current ? prevRef.current : undefined,
                        nextEl: nextRef.current ? nextRef.current : undefined,
                    }}
                    onInit={swiper => {
                        swiper.params.navigation.prevEl = prevRef.current
                        swiper.params.navigation.nextEl = nextRef.current
                        swiper.navigation.update()
                        setAnimation(true)
                    }}
                    onSlideChange={swiper => {
                        setAnimation(false)
                        setTimeout(() => {
                            setAnimation(true)
                        }, 1)
                    }}
                >
                    {data.allFile.edges.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.bannerItem}>
                                <Img
                                    fixed={image.node.childImageSharp.fixed}
                                    objectFit="cover"
                                    objectPosition="50% 50%"
                                    style={{
                                        position: 'absolute',
                                        zIndex: '-1',
                                        width: '100%',
                                        height: '100%'
                                    }}
                                />
                                <div className={styles.bannerItemContent}>
                                    <Container>
                                        <div
                                            data-sal="slide-right"
                                            data-sal-duration="1000"
                                            data-sal-easing="ease"
                                            className={styles.bannerItemContentText}>
                                            <h2>Firma</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                                auctor</p>
                                        </div>
                                    </Container>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className={styles.bannerWrapper}>
                        <div className={styles.bannerNavigations}>
                            <Button
                                key='prev'
                                reference={prevRef}
                                classname={`${buttonStyles.btn} ${buttonStyles.btnPrimary} ${buttonStyles.btnHover} ${buttonStyles.btnBeforeLeft}`}
                                children={<PrevArrowIcon />}
                            />
                            <Button
                                key='next'
                                reference={nextRef}
                                className={`${buttonStyles.btn} ${buttonStyles.btnPrimary} ${buttonStyles.btnHover} ${buttonStyles.btnBeforeRight}`}
                                children={<NextArrowIcon/>}
                            />
                        </div>
                        <div className={styles.bannerProgressBar}>
                            <ProgressBar
                                animation={animation}
                                currentSlide={currentSlide}
                                totalSlide={totalSlide}
                            />
                        </div>
                    </div>
                </Swiper>
            </div>
            <Form/>
        </section>
    )
}
