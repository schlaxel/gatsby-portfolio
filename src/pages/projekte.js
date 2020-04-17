import React from 'react';
import SiteWrapper from '../components/siteWrapper';
import AllProjects from '../components/projects/allProjects';

const Projekte = ({ location }) => {
    return (
        <SiteWrapper seoTitle="Alex Kiefer - Projekte" isPage wasPage={location.state.wasPage}>
            <AllProjects wasPage={location.state.wasPage} />
        </SiteWrapper>
    );
};

export default Projekte;