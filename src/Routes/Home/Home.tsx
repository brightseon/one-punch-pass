import React from 'react';
import styles from './styles.scss';
import Section from '../../Components/Section';
import { sections } from '../../utils/gosimoon';

const Home = () => (
    <div className={ styles.home }>
        { sections.map(section => <Section key={ section.key } section={ section } />) }
    </div>
);

export default Home;