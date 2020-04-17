import React from 'react';
import SiteWrapper from '../components/siteWrapper';
import AllProjects from '../components/projects/allProjects';

const Projekte = (props) => {
    let wasPage = false;
    if (props.location !== undefined) {
        if (props.location.state !== undefined && props.location.state !== null) {
            props.location.state.wasPage === true ? wasPage = true : wasPage = false;
        }
    }
    return (
        <SiteWrapper seoTitle="Alex Kiefer - Projekte" isPage wasPage={wasPage}>
            <AllProjects wasPage={wasPage} />
        </SiteWrapper>
    );
};

export default Projekte;