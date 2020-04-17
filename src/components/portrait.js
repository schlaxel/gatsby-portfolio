import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode";
import darkImg from '../img/me_dark_sm.png';
import lightImg from '../img/me_light_sm.png';

const Image = styled.img`
    width: 200px;
    height: 200px;
    margin: 0 auto;
    border-radius: 100px;
    display: block;
`

const Portrait = () => {
    const themeContext = useContext(ThemeManagerContext);
    let imgSrc = lightImg;
    themeContext.isDark ? imgSrc = darkImg : imgSrc = lightImg;

    return (
        <Image className="fadeInDown animated slow" src={imgSrc} alt="Alexander Kiefer" />
    )
}

export default Portrait;
