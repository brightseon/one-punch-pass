import React, { SFC } from 'react';
import styles from './styles.scss';
import { ClassType } from '../../types/types';
import AnswerInput from '../../Components/AnswerInput';

interface IProps {
    isArea? : boolean;
    content : string;
    type : ClassType;
    isShow : boolean;
};

const Goal : SFC<IProps> = ({ isArea = true, content, type, isShow }) => (
    <div className={ styles.goal }>
        <div className={ `${ styles.titleBox } ${ styles[type] }` }>
            <span className={ styles.title }>{ isArea ? '영역 목표' : '내용범주 목표' }</span>
        </div>
        <div className={ `${ styles.contentBox } ${ styles[`${ type }Detail`] }` }>
            <AnswerInput answer={ content } inputKey={ 'contentCategoryGoal' } idx={ 1 } isShow={ isShow } />
        </div>
    </div>
);

export default Goal;