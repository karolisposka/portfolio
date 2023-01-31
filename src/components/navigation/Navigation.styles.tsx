import Styled from "styled-components";
import { Link } from "react-scroll";

export const Header = Styled.div`
    position:sticky;
    top:0;
    left:0;
    background:#ffffff;
    width:100%;   
    box-shadow: 0 4px 2px -2px gray;
    z-index:3;
    padding:2rem 0;
`;

export const ContentFlex = Styled.div`
    margin:0 2rem;
    display:flex;
    justify-content:space-between;
    align-items: center; 
`;

export const LogoWrapper = Styled.div`
    display:flex;
    align-items:center;

`;

export const ProfileImage = Styled.img`
    border-radius:50%;
    width:3rem;
    height:3rem;
    object-fit: cover;
    @media(min-width:577px){
        width:4rem;
        height:4rem;
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

export const MenuButton = Styled.button`
    background: transparent;
    margin: 0;
    padding: 0;
    border-radius:5px;
    box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.75);    
    &[aria-expanded = 'true'] .line{
        transition: y 250ms ease-in, opacity 0ms ease-in 250ms, transform 250ms ease-in 250ms, fill 250ms ease-in 500ms;
    };
    &[aria-expanded = 'true'] .first-line {
        y: 50;
        transform: rotate(-45deg);
        fill:${(props) => props.theme.background.danger};
    };
    &[aria-expanded = 'true'] .second-line{
        opacity: 0;
    };
    &[aria-expanded = 'true'] .third-line {
        y: 50;
        transform: rotate(45deg);
        fill:${(props) => props.theme.background.danger};
    };

    @media(min-width:576px){
        display:none;
    }
`;

export const Svg = Styled.svg`
   
`;

export const Rect = Styled.rect`
    transition: y 250ms ease-in 250ms, opacity 0ms ease-in 250ms, transform 250ms ease-in;
    transform-origin:center;
    rx:5;
    &:first-of-type{
        x:10;
        y: 20;
    }   
    &:nth-of-type(2){
        x:10;
        y: 50;
    }  
    &:nth-of-type(3){
        x:10;
        y: 80;
    }    
`;
