import React, { SFC } from 'react';
import styles from './styles.scss';

const PHYSICAL_EXERCISE_HELTH = 'physicalExerciseHelth';
const COMMUNICATION = 'communication';
const SOCIAL_RELATIONS = 'socialRelations';
const ART_EXPERIENCE = 'artExperience';
const NATURE_INQUIRY = 'natureInquiry';

type ClassType = typeof PHYSICAL_EXERCISE_HELTH 
                | typeof COMMUNICATION 
                | typeof SOCIAL_RELATIONS 
                | typeof ART_EXPERIENCE 
                | typeof NATURE_INQUIRY;

interface IProps {
    isArea? : boolean;
    content : string;
    type : ClassType;
};

const Goal : SFC<IProps> = ({ isArea = true, content, type }) => (
    <div className={ styles.goal }>
        <div className={ `${ styles.titleBox } ${ styles[type] }` }>
            <span className={ styles.title }>{ isArea ? '영역 목표' : '내용범주 목표' }</span>
        </div>
        <div className={ `${ styles.contentBox } ${ styles[`${ type }Detail`] }` }>
            <span className={ styles.content }>{ content }</span>
        </div>
    </div>
);

export default Goal;