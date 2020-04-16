import React from 'react';
import SiteWrapper from '../components/siteWrapper';
import AllProjects from '../components/projects/allProjects';

const Projekte = () => {
    return (
        <SiteWrapper seoTitle="Alex Kiefer - Projekte" isPage>
            <AllProjects />
        </SiteWrapper>
    );
};

export default Projekte;