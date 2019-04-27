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
import { ROOT, SUMMARY_PATH, PHYSICAL_EXERCISE_HEALTH_PATH, COMMUNICATION_PATH, SOCIAL_RELATIONS_PATH, ART_EXPERIENCE_PATH, NATURE_INQUIRY_PATH } from '../../utils/paths';

const App = () => (
    <div className={ styles.app }>
        <Switch>
            <Route path={ ROOT } exact component={ Home } />
            <Route path={ SUMMARY_PATH } component={ Summary } />
            <Route path={ PHYSICAL_EXERCISE_HEALTH_PATH } component={ PhysicalExerciseHealth } />
            <Route path={ COMMUNICATION_PATH } component={ Communication } />
            <Route path={ SOCIAL_RELATIONS_PATH } component={ SocialRelations } />
            <Route path={ ART_EXPERIENCE_PATH } component={ ArtExperience } />
            <Route path={ NATURE_INQUIRY_PATH } component={ NatureInquiry } />
            <Redirect from="*" to="/" />
        </Switch>
    </div>
);

export default App;