import * as React from "react";
import Layout from "../layouts/layout";
import Banner from "../components/banner/banner";
import Offer from "../components/offer/offer";
import Benefits from "../components/benefits/benefits";
import Detal from "../components/detal/detal";
import Article from "../components/articles/articles";
import Footer from "../components/footer/footer";
import Gallery from "../components/gallery/gallery";

const IndexPage = () => (
    <Layout>
        <Banner/>
        <Offer/>
        <Benefits/>
        <Detal/>
        <Article/>
        <Gallery/>
        <Footer/>
    </Layout>
)

export default IndexPage
