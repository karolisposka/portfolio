import Styled from "styled-components";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

export const Header = Styled.div`
    position:fixed;
    padding: 2rem 0;
    top:0;
    left:0;
    background:#ffffff;
    width:100%;  
    display:flex;
    justify-content:space-between;
    align-items: center;  
    box-shadow: 0 4px 2px -2px gray;
    z-index:3;
`;

export const LogoWrapper = Styled.div`
    

`;

export const Span = Styled.span`
    

`;

export const Navbar = Styled.nav`
    display:none;
    @media(min-width:577px){
        display:block;
    }
`;

export const NavLink = Styled(Link)`
    margin: 0 1rem; 
    font-family:${(props) => props.theme.fonts.name};
    font-weight:600;
    font-size:12px;
    text-transform: uppercase;
    transition:0.2s ease-in-out;
    &&.active{
        border-bottom: 2px solid ${(props) => props.theme.background.secondary};
    }
    &&:hover{
        text-shadow: 1px 1px 0px black;
    }
`;

export const BurgerMenu = Styled.div`
    border: 1px solid rgba(0,0,0,0.3);
    margin:0 1rem;
    border-radius:0.25rem;
    display:none;
    align-items:Center;
    justify-content:Center;
    @media(max-width:576px){
        display:flex;
    }
`;

export const BurgerMenuItem = Styled(FaBars)`
    cursor:pointer;
    padding:0.25rem;
    font-size:24px;
  
`;
