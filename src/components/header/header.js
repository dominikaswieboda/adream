import React, {useEffect, useRef, useState} from "react"
import * as styles from "./header.module.scss"
import Container from "../../layouts/container/container"
import Logo from "../logo/logo";
import {useBreakpoint} from 'gatsby-plugin-breakpoints';
import FocusLock from "react-focus-lock";
import Burger from "../burger/burger";
import Menu from "../menu/menu";
import {useOnClickOutside} from "../hooks/useOnClickOutside";
import * as stylesMenu from '../menu/menu.module.scss';

const Header = () => {
    const breakpoints = useBreakpoint();
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";
    const [scrolled, setScrolled] = useState(false)
    useOnClickOutside(node, () => setOpen(false));
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    return (<header className={scrolled ? `${styles.header} ${styles.scrolled}` : styles.header}>
        <Container>
            <div className={styles.content}>
                {breakpoints.l && open ? null : <Logo/>}
                {breakpoints.l ? null : <div ref={node}>
                    <FocusLock disabled={!open}>
                        <Burger open={open} setOpen={setOpen} aria-controls={menuId}/>
                        <Menu classname={open ? `${stylesMenu.menu} ${stylesMenu.isActive}` : stylesMenu.menu}
                              open={open} setOpen={setOpen} id={menuId}/>
                    </FocusLock>
                </div>}
                {breakpoints.l ? <Menu open={false} classname={stylesMenu.nav} breakpointL={breakpoints.l}/> : null}
            </div>
        </Container>
    </header>)
}

export default Header;
