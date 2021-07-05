import * as React from 'react';
import Container from "../../layouts/container/container";
import * as styles from './footer.module.scss';
import Logo from "../logo/logo";
import DetalHorizontalIcon from "../../assets/icons/detalHorizontalIcon.svg";
import Link from "gatsby-link";
import LogoADream from '../../assets/icons/logo_adream.svg';

export default function Footer() {
    return(
        <section className={styles.footer}>
            <div className={styles.content}>
            <Container classname={styles.containerOverflow}>
                <div className={styles.detal}>
                    <DetalHorizontalIcon />
                </div>
                <Logo classname={styles.logo}/>
                <div className={styles.items}>
                    <div className={styles.item}>
                        <div className={styles.address}>
                            <p>ul. Towarowa</p>
                            <p>31-000 Kraków</p>
                        </div>
                        <div className={styles.contact}>
                            <a href='tel:999999999'>+ 48 999 999 999</a>
                            <a href='mailto:email@email.com'>email@email.com</a>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.nav}>
                            <div className={styles.navItem}>
                                <Link to={'/'}>Strona główna</Link>
                                <Link to={"#"}>Poznaj przestrzeń</Link>
                                <Link to={"#"}>Oferta</Link>
                            </div>
                            <div className={styles.navItem}>
                                <Link to={"#"}>Lokalizacja</Link>
                                <Link to={"#"}>Własne biuro</Link>
                                <Link to={"#"}>Kontakt</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.info}>
                    <span>
                        <Link to={"#"}>Polityka prywatności</Link>
                    </span>
                    <span>
                        Proudly designed by <Link to={"#"}><LogoADream /></Link>
                    </span>
                </div>
            </Container>
            </div>
        </section>
    )
}