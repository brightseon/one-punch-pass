import React from 'react';
import PageTitle from '../../Components/PageTitle';
import answerSheets from '../../data/answerSheets';
import Container from '../../Components/Container';

const { NATURE_INQUIRY : { areaTarget, contentCategories } } = answerSheets;

const NatureInquiry = () => (
    <div>
        <PageTitle currentPageName="자연탐구" />
        <Container areaTarget={ areaTarget } type={ 'natureInquiry' } contentCategries={ contentCategories } />
    </div>
);

export default NatureInquiry;