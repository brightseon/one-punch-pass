import React from 'react';
import Section from '../../Components/Section';
import { sections } from '../../utils/gosimoon';

const Home = () => (
    <div>
        {
            sections.map(section => <Section key={ section.key } section={ section } />)
        }
    </div>
);

export default Home;