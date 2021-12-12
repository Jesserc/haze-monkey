import TopBar from "./topbar";
import NavList from './navList';

const NavBar = ({ handleClick, isClicked }) => {
    return (
        <>
            <TopBar 
                handleClick= {handleClick}
                isClicked={isClicked}
            /> 
            <NavList
                handleClick={handleClick}
                isClicked={isClicked}
            />
        </>   
    );
}
 
export default NavBar;