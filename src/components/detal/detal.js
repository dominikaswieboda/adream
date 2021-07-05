import * as React from 'react';
import * as styles from './detal.module.scss';
import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image";
import DetalIcon from '../../assets/icons/detalIcon.svg';
import Container from "../../layouts/container/container";
export default function Detal() {

    const dataDetal = useStaticQuery(graphql`
    query {
    fileName: file(relativePath: { eq: "detal/detal.png" }) {
      childImageSharp {
        fixed(width: 1920) {
          ...GatsbyImageSharpFixed
        }   
      }
    }
  }
    `)
    return(
        <section className={styles.detal}>
            <div className={styles.content}
                 data-sal="slide-left"
                 data-sal-duration="1000"
                 data-sal-easing="ease">
                <Img
                    fixed={dataDetal.fileName.childImageSharp.fixed}
                    objectFit="contain"
                    objectPosition="0 50%"
                    style={{
                        position: 'absolute',
                        zIndex: '-1',
                        width: '100%',
                        height: '100%'
                    }}
                    imgStyle={{
                        objectPosition: 'top center',
                        objectFit: 'contain',
                        left: '169px',
                    }}
                />
                <div className={styles.info}>
                <Container
                    classname={styles.containerOverflow}
                >
                    <div className={styles.icon}>
                        <DetalIcon />
                    </div>
                    <div className={styles.heading}>
                        <h1>Lorem ipsum vs własne biuro</h1>
                    </div>
                </Container>
                </div>

            </div>
        </section>
    )
}