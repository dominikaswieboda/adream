import * as React from 'react'
import Container from "../../layouts/container/container";
import * as styles from './articles.module.scss';
import Article from "../article/article";
import {graphql, useStaticQuery} from "gatsby";

export default function Articles() {
    const dataArticles = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "articles" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 450) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
    const articleImage1 = dataArticles.allFile.edges[0].node.childImageSharp.fluid
    const articleImage2 = dataArticles.allFile.edges[1].node.childImageSharp.fluid
    const articleImage3 = dataArticles.allFile.edges[2].node.childImageSharp.fluid
    return (
        <section className={styles.articles}>
            <Container>
                <div className={styles.content}>
                    <h1>Aktualności</h1>
                    <div className={styles.items}
                         data-sal="slide-right"
                         data-sal-duration="1000"
                         data-sal-easing="ease">
                        <div className={styles.item}>
                            <Article
                                key='article1'
                                image={articleImage1}
                                date="01.01.2021"
                                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            />
                        </div>
                        <div className={styles.item}>
                            <Article
                                key='article2'
                                image={articleImage2}
                                date="01.01.2021"
                                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            />
                        </div>
                        <div className={styles.item}>
                            <Article
                                key='article3'
                                image={articleImage3}
                                date="01.01.2021"
                                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}