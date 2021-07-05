import React from "react";
import * as styles from './menu.module.scss'
import {Link} from "gatsby";
import FacebookIcon from "../../assets/icons/fb.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import Logo from "../logo/logo";
import {useBreakpoint } from 'gatsby-plugin-breakpoints';
const Menu = ({open, classname, breakpointL, ...props}) => {
    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;
    const breakpoints = useBreakpoint();
    return (
        <nav open={open} aria-hidden={!isHidden} {...props}
             className={classname}>
            {!breakpoints.l ? <Logo classname={styles.logoMobile}/> : null}
            <div className={styles.navLinks}>
                <Link className={styles.navLink} to={"#"} tabIndex={tabIndex}>
                    Poznaj przestrzeń
                </Link>
                <Link className={styles.navLink} to={"#"} tabIndex={tabIndex}>
                    Oferta
                </Link>
                <Link className={styles.navLink} to={"#"} tabIndex={tabIndex}>
                    Lokalizacja
                </Link>
                <Link className={styles.navLink} to={"#"} tabIndex={tabIndex}>
                    Własne biuro
                </Link>
                <Link className={styles.navLink} to={"#"} tabIndex={tabIndex}>
                    Kontakt
                </Link>
            </div>
            <div className={styles.social}>
                <Link to={"#"} className={styles.socialIcon}>
                    <FacebookIcon/>
                </Link>
                <Link to={"#"} className={styles.socialIcon}>
                    <InstagramIcon/>
                </Link>
            </div>
        </nav>
    );
};
export default Menu;