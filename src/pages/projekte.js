import React from 'react';
import styled from 'styled-components';
import SiteWrapper from '../components/siteWrapper';
import AllProjects from '../components/projects/allProjects';

const H1 = styled.h1`
    font-weight: 400;
`
const H2 = styled.h2`
    font-weight: 400;
    font-size: 1.2em;
    margin-bottom: 40px;
    max-width: 450px;
    width: 90%;
    margin: 0 auto 40px auto;
`

const Projekte = (props) => {
    let wasPage = false;
    if (props.location !== undefined) {
        if (props.location.state !== undefined && props.location.state !== null) {
            props.location.state.wasPage === true ? wasPage = true : wasPage = false;
        }
    }
    return (
        <SiteWrapper seoTitle="Alex Kiefer - Projekte" isPage wasPage={wasPage}>
            <H1 className={ wasPage ? 'animated slow fadeInDown' : 'animated slow fadeInDown delay-1s' }>
                Projekte
            </H1>
            <H2 className={ wasPage ? 'animated slow fadeInDown' : 'animated slow fadeInDown delay-1s' }>
                Hier findest du eine Auswahl an Projekten, an denen ich in letzter Zeit gearbeitet habe.
            </H2>
            <AllProjects wasPage={wasPage} />
        </SiteWrapper>
    );
};

export default Projekte;