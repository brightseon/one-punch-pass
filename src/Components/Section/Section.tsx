import React, { SFC } from 'react';
import { Link } from 'react-router-dom';
import { SectionType } from '../../utils/types';
import styles from './styles.scss';

interface IProps {
    section : SectionType;
};

const Section : SFC<IProps> = ({ section : { sectionName, sectionPath } }) => (
    <div className={ styles.section }>
        <Link to={ sectionPath }>{ sectionName }</Link>
    </div>
);

export default Section;