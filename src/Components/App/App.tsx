import React from 'react';
import styles from './styles.scss';
import { Switch, Route } from 'react-router-dom';
import Home from '../../Router/Home';
import Summary from '../../Router/Summary';
import PhysicalExerciseHealth from '../../Router/PhysicalExerciseHealth';
import Communication from '../../Router/Communication';
import SocialRelations from '../../Router/SocialRelations';
import ArtExperience from '../../Router/ArtExperience';
import NatureInquiry from '../../Router/NatureInquiry';
import { ROOT, SUMMARY, PHYSICAL_EXERCISE_HEALTH, COMMUNICATION, SOCIAL_RELATIONS, ART_EXPERIENCE, NATURE_INQUIRY } from '../../utils/paths';

const App = () => (
    <div className={ styles.app }>
        <Switch>
            <Route path={ ROOT } exact component={ Home } />
            <Route path={ SUMMARY } component={ Summary } />
            <Route path={ PHYSICAL_EXERCISE_HEALTH } component={ PhysicalExerciseHealth } />
            <Route path={ COMMUNICATION } component={ Communication } />
            <Route path={ SOCIAL_RELATIONS } component={ SocialRelations } />
            <Route path={ ART_EXPERIENCE } component={ ArtExperience } />
            <Route path={ NATURE_INQUIRY } component={ NatureInquiry } />
        </Switch>
    </div>
);

export default App;