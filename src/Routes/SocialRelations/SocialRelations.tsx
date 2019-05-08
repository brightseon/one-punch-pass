import React from 'react';
import styles from './styles.scss';
import PageTitle from '../../Components/PageTitle';
import answerSheets from '../../data/answerSheets';
import Goal from '../../Components/Goal';
import Block from '../../Components/Block';

const { SOCIAL_RELATIONS : { areaTarget, contentCategories } } = answerSheets;

const SocialRelations = () => (
    <div className={ styles.socialRelations }>
        <PageTitle currentPageName="사회관계" />
        <Goal content={ areaTarget } type={ 'socialRelations' } />
        <Block contentCategories={ contentCategories } />
    </div>
);

export default SocialRelations;