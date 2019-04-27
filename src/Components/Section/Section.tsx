import React, { SFC } from 'react';
import { Link } from 'react-router-dom';
import { SectionType } from '../../utils/types';
import styles from './styles.scss';

interface IProps {
    section : SectionType;
};

const Section : SFC<IProps> = ({ section : { key, sectionName, sectionPath } }) => {
    console.log('sectionName : ', sectionName);
    return (
    <div className={ `${ styles.section } ${ styles[key] }` }>
        <Link to={ sectionPath }>{ sectionName }</Link>
    </div>
)};

export default Section;