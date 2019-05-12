import React from 'react';
import PageTitle from '../../Components/PageTitle';
import answerSheets from '../../data/answerSheets';
import Container from '../../Components/Container';

const { PHYSICAL_EXERCISE_HEALTH : { areaTarget, contentCategories } } = answerSheets;

const PhysicalExerciseHealth = () => (
    <div>
        <PageTitle currentPageName="신체운동·건강" />
        <Container areaTarget={ areaTarget } type={ 'physicalExerciseHealth' } contentCategries={ contentCategories } />
    </div>
);

export default PhysicalExerciseHealth;