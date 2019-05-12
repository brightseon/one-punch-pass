import React from 'react';
import PageTitle from '../../Components/PageTitle';
import Container from '../../Components/Container';
import answerSheets from '../../data/answerSheets';

const { ART_EXPERIENCE : { areaTarget, contentCategories } } = answerSheets;

// 예술경험
const ArtExperience = () => (
    <div>
        <PageTitle currentPageName="예술경험" />
        <Container areaTarget={ areaTarget } type={ 'artExperience' } contentCategries={ contentCategories } />
    </div>
);

export default ArtExperience;