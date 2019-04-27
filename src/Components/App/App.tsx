import React from 'react';
import styles from './styles.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../Routes/Home';
import Summary from '../../Routes/Summary';
import PhysicalExerciseHealth from '../../Routes/PhysicalExerciseHealth';
import Communication from '../../Routes/Communication';
import SocialRelations from '../../Routes/SocialRelations';
import ArtExperience from '../../Routes/ArtExperience';
import NatureInquiry from '../../Routes/NatureInquiry';
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
            <Redirect from="*" to="/" />
        </Switch>
    </div>
);

export default App;