// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react"
// Import Swiper styles
import "swiper/swiper-bundle.css"
import "../../styles/theme/swiper.scss"

import React, {useRef, useState} from "react";
import * as styles from './gallery.module.scss';
import PrevArrowIcon from "../../assets/icons/prevArrow.svg"
import NextArrowIcon from "../../assets/icons/nextArrow.svg"
import {Button} from "../button/button";
import * as buttonStyles from '../button/button.module.scss';

// import Swiper core and required modules
import SwiperCore, {Navigation} from "swiper/core";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Container from "../../layouts/container/container";
import {useBreakpoint} from "gatsby-plugin-breakpoints";


// install Swiper modules
SwiperCore.use([Navigation]);

export default function Gallery() {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const breakpoints = useBreakpoint();
    const dataGallery = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
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

    const gallery1 = dataGallery.allFile.edges[0].node.childImageSharp.fixed
    const gallery2 = dataGallery.allFile.edges[1].node.childImageSharp.fixed
    const gallery3 = dataGallery.allFile.edges[2].node.childImageSharp.fixed
    const gallery4 = dataGallery.allFile.edges[3].node.childImageSharp.fixed

    const images = [gallery1.src, gallery2.src, gallery3.src, gallery4.src]
    return (
        <section className={styles.gallery}>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images.length)
                    }
                />
            )}
            <div className={styles.content}>
                <Container classname={styles.containerOverflow}>
                    <div className={styles.heading}>
                        <h1>Galleria</h1>
                    </div>
                </Container>

                <Swiper
                    data-sal="slide-left"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    slidesPerView={1}
                    navigation={{
                        prevEl: prevRef.current ? prevRef.current : undefined,
                        nextEl: nextRef.current ? nextRef.current : undefined,
                    }}
                    onInit={swiper => {
                        swiper.params.navigation.prevEl = prevRef.current
                        swiper.params.navigation.nextEl = nextRef.current
                        swiper.navigation.update()
                    }}
                    className={styles.slider}
                >
                    {!breakpoints.l ?
                        <>
                            {/*Mobile*/}
                            <SwiperSlide>
                                <div className={styles.wrapperItem}>
                                    <button onClick={() => {
                                        setPhotoIndex(0)
                                        setIsOpen(true)
                                    }} className={styles.wrapperItemImage}>
                                        <Img
                                            fixed={gallery1}
                                            objectFit="cover"
                                            objectPosition="50% 50%"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                            }}
                                        />
                                    </button>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.wrapperItem}>
                                    <button onClick={() => {
                                        setPhotoIndex(1)
                                        setIsOpen(true)
                                    }} className={styles.wrapperItemImage}>
                                        <Img
                                            fixed={gallery2}
                                            objectFit="cover"
                                            objectPosition="50% 50%"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                            }}
                                        />
                                    </button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.wrapperItem}>
                                    <button onClick={() => {
                                        setPhotoIndex(2)
                                        setIsOpen(true)
                                    }} className={styles.wrapperItemImage}>
                                        <Img
                                            fixed={gallery3}
                                            objectFit="cover"
                                            objectPosition="50% 50%"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                            }}
                                        />
                                    </button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.wrapperItem}>
                                    <button onClick={() => {
                                        setPhotoIndex(3)
                                        setIsOpen(true)
                                    }} className={styles.wrapperItemImage}>
                                        <Img
                                            fixed={gallery4}
                                            objectFit="cover"
                                            objectPosition="50% 50%"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                            }}
                                        />
                                    </button>
                                </div>
                            </SwiperSlide>
                        </>
                        :
                        //Desktop
                        <SwiperSlide>
                            <div className={styles.items}>
                                <div className={styles.item}>
                                    <div className={styles.wrapperItem}>
                                        <button onClick={() => {
                                            setPhotoIndex(0)
                                            setIsOpen(true)
                                        }} className={styles.wrapperItemImage}>
                                            <Img
                                                fixed={gallery1}
                                                objectFit="cover"
                                                objectPosition="50% 50%"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.wrapper}>
                                        <div className={styles.wrapperItem}>
                                            <button onClick={() => {
                                                setPhotoIndex(1)
                                                setIsOpen(true)
                                            }} className={styles.wrapperItemImage}>
                                                <Img
                                                    fixed={gallery2}
                                                    objectFit="cover"
                                                    objectPosition="50% 50%"
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                    }}
                                                />
                                            </button>
                                        </div>
                                        <div className={styles.wrapperItem}>
                                            <button onClick={() => {
                                                setPhotoIndex(2)
                                                setIsOpen(true)
                                            }} className={styles.wrapperItemImage}>
                                                <Img
                                                    fixed={gallery3}
                                                    objectFit="cover"
                                                    objectPosition="50% 50%"
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                    }}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.wrapperItem}>
                                        <button onClick={() => {
                                            setPhotoIndex(3)
                                            setIsOpen(true)
                                        }} className={styles.wrapperItemImage}>
                                            <Img
                                                fixed={gallery4}
                                                objectFit="cover"
                                                objectPosition="50% 50%"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    }

                    {/*Swiper mobile*/}
                    <div className={styles.navigations}>
                        <Button
                            key='prev'
                            reference={prevRef}
                            classname={`${buttonStyles.btn} ${buttonStyles.btnPrimary} ${buttonStyles.btnHover} ${buttonStyles.btnBeforeLeft}`}
                            children={<PrevArrowIcon/>}
                        />
                        <Button
                            key='next'
                            reference={nextRef}
                            className={`${buttonStyles.btn} ${buttonStyles.btnPrimary} ${buttonStyles.btnHover} ${buttonStyles.btnBeforeRight}`}
                            children={<NextArrowIcon/>}
                        />
                    </div>
                </Swiper>
            </div>
        </section>
    )
}