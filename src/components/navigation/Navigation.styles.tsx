import Styled from "styled-components";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

export const Header = Styled.div`
    position:sticky;
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
    margin: 0 1rem;
    display:flex;
    align-items:center;

`;

export const ProfileImage = Styled.img`
    border-radius:50%;
    width:4rem;
    height:4rem;
    object-fit: cover;
    @media(min-width:577px){
        width:6rem;
        height:6rem;
    }
`;

export const Span = Styled.span`
    margin-left: 0.5rem;
    font-weight:900;
    font-family:${(props) => props.theme.fonts.name};
    text-transform:uppercase;

`;

export const Navbar = Styled.nav`
    display:none;
    margin:0 1rem;
    @media(min-width:577px){
        display:block;
    }
`;

export const NavLink = Styled(Link)`
    margin: 0 2rem; 
    font-family:${(props) => props.theme.fonts.name};
    font-weight:900;
    font-size:19px;
    text-transform: uppercase;
    transition:0.2s ease-in-out;
    &.active{
        color: #def10ca2;
    }
    &:not(.active):hover{
        color: #A31ACB
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
