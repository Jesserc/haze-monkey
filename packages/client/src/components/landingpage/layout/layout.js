// Page Layout
import { NextPage } from "next";
import NavBar from "../appNavbar/navbar";
import Footer from "../footer";
// Navbar and Footer Component


const Layout = ({ handleClick, isClicked, children}) => {
    return (
        <>
            <NavBar 
                handleClick = { handleClick }
                isClicked = { isClicked }
            />
                {children}
            <Footer />
        </>
    );
}

export default Layout;