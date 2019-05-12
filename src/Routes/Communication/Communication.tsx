import React from 'react';
import PageTitle from '../../Components/PageTitle';
import Container from '../../Components/Container';
import answerSheets from '../../data/answerSheets';

const { COMMUNICATION : { areaTarget, contentCategories } } = answerSheets;

const Communication = () => (
    <div>
        <PageTitle currentPageName="의사소통" />
        <Container areaTarget={ areaTarget } type={ 'communication' } contentCategries={ contentCategories } />
    </div>
);

export default Communication;