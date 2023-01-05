import Styled from "styled-components";
import { Link } from "react-scroll";

type props = {
  status: boolean;
};

export const MenuContainer = Styled.div<props>`
    position:fixed;
    overflow:hidden;
    font-family:${(props) => props.theme.fonts.name};
    text-transform:capitalize;
    font-size:20px;
    top:6.2rem;
    right:0;
    height:calc(100vh - 6.2rem);
    transition: 0.3s ease-in-out;
    width: ${(props) => (props.status ? "60%" : 0)};
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
    margin-top:1rem;
`;

export const NavLink = Styled(Link)`
    cursor: pointer;
    direction: rtl;
    padding:0.5rem 1rem;
    width:80%;
    font-weight:600;
    margin-right: auto;
    border-top-left-radius:1rem;
    border-bottom-left-radius:1rem;
    transition:0.3s ease-in-out;
    &.active{ 
        background: #A31ACB;
        color:#ffff;
    }
    &:not(.active):hover{
        background:#F5EA5A;
        color: black;
    }
`;
