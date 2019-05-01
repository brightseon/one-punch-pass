import React, { SFC } from 'react';
import { Link } from 'react-router-dom';
import { SectionType } from '../../types/types';
import styles from './styles.scss';

interface IProps {
    section : SectionType;
};

const Section : SFC<IProps> = ({ section : { key, sectionName, sectionPath } }) => (
    <div className={ `${ styles.section } ${ styles[key] }` }>
        <Link to={ sectionPath }>{ sectionName }</Link>
    </div>
);

export default Section;