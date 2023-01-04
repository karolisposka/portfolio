import Styled from "styled-components";
import { Link } from "react-scroll";

export const MenuContainer = Styled.div`
    position:fixed;
    top:6.2rem;
    right:0;
    height:calc(100vh - 6.2rem);
    width:80%;
    z-index:4;
    background:white;
    border-left: 1px solid rgba(0,0,0,0.3);
    @media(min-width:577px){
        display:none;
    }
`;

export const Navbar = Styled.div`
    display:flex;
    flex-direction:column;
`;

export const NavLink = Styled(Link)`
    cursor: pointer;

`;
