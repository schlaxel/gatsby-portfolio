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
`

const Nav = ({ isPage }) => (
    <Wrapper>
        <Elem to="/alex" className={isPage ? null : 'animated fadeInUp delay-04s'}>
            <User size="23" />
        </Elem>
        <Elem to="/projekte" className={isPage ? null : 'animated fadeInUp delay-06s'}>
            <Rocket size="14" />
        </Elem>
        <Elem to="/kontakt" className={isPage ? null : 'animated fadeInUp delay-08s'}>
            <Info size="14" />
        </Elem>
    </Wrapper>
);

export default Nav;