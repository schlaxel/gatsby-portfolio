import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SiteWrapper from '../components/siteWrapper';
import SocialIcons from '../components/socialIcons';
import ErrorImg from '../img/error.jpg';
import ArrowImg from '../img/arrow.png';

const H = styled.h1`
    font-weight: 400;

`
const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Img = styled.img`
    max-width: 350px;
    width: 90%;
    height: auto;
    border-radius: 175px;
    display: block;
    margin: auto;
`
const Arrow = styled.img`
    ${props => props.theme.isDark && `
        filter: brightness(0);
    `}
`

const P = styled.p`
    max-width: 300px;
    margin: auto;
    padding: 10px;
    box-sizing: border-box;
`

const Kontakt = (props) => {
    const [isReady, setIsReady] = useState(false);

    let wasPage = false;
    if (props.location !== undefined) {
      if (props.location.state !== undefined && props.location.state !== null) {
        props.location.state.wasPage === true ? wasPage = true : wasPage = false;
      }
    }

    useEffect(() => {
      if (wasPage) {
        setIsReady(true);
      } else {
        setTimeout(() => { 
          setIsReady(true);
        }, 1500);
      }
    }, [setIsReady, wasPage]);

    return (
        <SiteWrapper isPage wasPage={wasPage}>
            { isReady &&
            <div className="animated fadeInLeft slow">
                <H>Diese Seite existiert leider nicht.</H>
                <Img src={ErrorImg} alt="Error 404" />
                <Wrap>
                    <div>
                        <P>Wie du siehst bin ich momentan leider machtlos.</P>
                        <P>Schreib' mir doch einfach, wenn irgendwas unklar ist:</P>
                    </div>
                    <Arrow src={ArrowImg} alt="Arrow" />
                </Wrap>
                <SocialIcons animate />
            </div> 
            }
        </SiteWrapper>
    );
};

export default Kontakt;