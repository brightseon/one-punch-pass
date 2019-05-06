import React, { SFC, SetStateAction } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../Routes/Home';
import Login from '../../Routes/Login';
import Summary from '../../Routes/Summary';
import PhysicalExerciseHealth from '../../Routes/PhysicalExerciseHealth';
import Communication from '../../Routes/Communication';
import SocialRelations from '../../Routes/SocialRelations';
import ArtExperience from '../../Routes/ArtExperience';
import NatureInquiry from '../../Routes/NatureInquiry';
import { ROOT, SUMMARY_PATH, PHYSICAL_EXERCISE_HEALTH_PATH, COMMUNICATION_PATH, SOCIAL_RELATIONS_PATH, ART_EXPERIENCE_PATH, NATURE_INQUIRY_PATH } from '../../utils/paths';

interface IProps {
    isLoggedIn? : boolean;
    setIsLoggedIn : (value : SetStateAction<boolean>) => void;
};

const LoggedInRoutes : SFC = () => (
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
);

interface LoggedOutRoutesProps {
    setIsLoggedIn : (value : SetStateAction<boolean>) => void;
};

const LoggedOutRoutes : SFC<LoggedOutRoutesProps> = ({ setIsLoggedIn }) => (
    <Switch>
        <Route path={ ROOT } exact component={ () => <Login setIsLoggedIn={ setIsLoggedIn } /> } />
        <Redirect from="*" to="/" />
    </Switch>
);

const Router : SFC<IProps> = ({ isLoggedIn = false, setIsLoggedIn }) => 
    isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes setIsLoggedIn={ setIsLoggedIn } />;

export default Router;