import React from 'react';
import PageTitle from '../../Components/PageTitle';
import answerSheets from '../../data/answerSheets';
import Container from '../../Components/Container';

const { SOCIAL_RELATIONS : { areaTarget, contentCategories } } = answerSheets;

const SocialRelations = () => (
    <div>
        <PageTitle currentPageName="사회관계" />
        <Container areaTarget={ areaTarget } type={ 'socialRelations' } contentCategries={ contentCategories } />
    </div>
);

export default SocialRelations;