import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Nav from '../components/nav';
import Animation from '../animation';

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    flex-direction: column;
    transition: all .8s ease-in-out;
    ${props => props.isPage && `
      width: 50%;
      @media (max-width: 900px) {
        z-index: 9999;
        width: 100%;
        height: 140px;
        padding-top: 27px;
        background: ${props.theme.bgColor1};
      }
    `}
`
const Name = styled.h1`
    text-transform: uppercase;
    letter-spacing: 0.4em;
    margin: 0 0 10px 0;
    font-weight: 400;
    @media (max-width: 395px) {
        letter-spacing: 0.2em;
        font-size: 1.8em;
    }
`
const H2 = styled.h2`
  font-weight: 400;
  margin: 0;
  @media (max-width: 395px) {
    letter-spacing: 0em;
    font-size: 1.5em;
  }
  ${props => props.animDone && props.isPage && `
    @media (max-width: 900px) {
      display: none;
    }
  `}
`
const BottomLine = styled.hr`
  ${props => props.isPage ?
    ` @media (max-width: 900px) {
        border: solid 3px ${props.theme.darker};
        width: 100%;
        margin-bottom: 0;
      }
    ` :
    `display: none;`
  }
  @media (min-width: 900px) {
    display: none;
  }
`

const Home = (props) => {
  const [isPage, setIsPage] = useState(false);
  const [animDone, setIsAnimDone] = useState(false);
  
  useEffect(() => {
    setTimeout(() => { 
      setIsPage(props.isPage);
    }, 100);
    setTimeout(() => { 
      setIsAnimDone(true);
    }, 500);
  }, [setIsPage, setIsAnimDone]);

  return (
    <Wrapper isPage={isPage}>
        <Animation />
        <Name className={props.isPage ? null : 'animated fadeInDown slow'}>Alex Kiefer</Name>
        <H2 
          animDone={animDone} 
          isPage={isPage} 
          className={props.isPage ? 'animated-mobile fadeOutUp' : 'animated fadeInLeft'}
        >Software Entwickler</H2>
        <Nav isPage={props.isPage} />
        <BottomLine className="animated fadeInLeft delay-1s" isPage={props.isPage} />
    </Wrapper>
  )
};

export default Home;