import React from 'react';
import styles from './styles.scss';
import Section from '../../Components/Section';
import sections from '../../utils/sections';

const Home = () => (
    <div className={ styles.home }>
        { sections.GOSIMOOM_SECTION.map(section => <Section key={ section.key } section={ section } />) }
    </div>
);

export default Home;