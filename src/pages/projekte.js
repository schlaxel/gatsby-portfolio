import React from 'react';
import SiteWrapper from '../components/siteWrapper';
import AllProjects from '../components/projects/allProjects';

const Projekte = ({ location }) => {
    let wasPage = false;
    location.state.wasPage === true ? wasPage = true : wasPage = false;
    return (
        <SiteWrapper seoTitle="Alex Kiefer - Projekte" isPage wasPage={wasPage}>
            <AllProjects wasPage={wasPage} />
        </SiteWrapper>
    );
};

export default Projekte;