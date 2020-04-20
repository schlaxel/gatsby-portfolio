import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { User } from 'styled-icons/feather';
import { Rocket } from 'styled-icons/icomoon';
import { Info } from 'styled-icons/fa-solid';

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 15px;
`
const Elem = styled(Link)`
    width: 45px;
    height: 45px;
    border-radius: 25px;
    background: ${props => props.theme.darker };
    color: ${props => props.theme.font};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px;
    ${props => props.isActive && `
        color: ${props.theme.accent};
        box-shadow: 0 0 10px ${props.theme.darker};
    `}
`

const Nav = ({ isPage }) => {
    let pathname = window.location.pathname;
    return (
        <Wrapper>
            <Elem 
                isActive={pathname === '/alex'}
                to="/alex"
                state={{ wasPage: isPage }} 
                className={isPage ? null : 'animated fadeInUp delay-04s'}
            >
                <User className={pathname === '/alex' && 'animated tada infinite slow'} size="23" />
            </Elem>
            <Elem   
                isActive={pathname === '/projekte'}
                to="/projekte" 
                state={{ wasPage: isPage }} 
                className={isPage ? null : 'animated fadeInUp delay-06s'}
            >
                <Rocket className={pathname === '/projekte' && 'animated rotateOutUpRight infinite slow'} size="14" />
            </Elem>
            <Elem 
                isActive={pathname === '/kontakt'}
                to="/kontakt" 
                state={{ wasPage: isPage }} 
                className={isPage ? null : 'animated fadeInUp delay-08s'}
            >
                <Info className={pathname === '/kontakt' && 'animated jello infinite slow'} size="14" />
            </Elem>
        </Wrapper>
    );
};

export default Nav;