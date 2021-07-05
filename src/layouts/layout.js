import React from "react";
import Header from "../components/header/header";

const Layout = ({children}) => (
    <>
        <Header/>
        <main>
            {children}
        </main>
    </>
)

export default Layout;


