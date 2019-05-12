import React, { SFC } from 'react';
import styles from './styles.scss';
import { ClassType } from '../../types/types';
import AnswerInput from '../../Components/AnswerInput';
import colors from '../../variables/_colors.scss';

interface IProps {
    isArea? : boolean;
    content : string;
    type : ClassType;
    isShow? : boolean;
};

const Goal : SFC<IProps> = ({ isArea = false, content, type, isShow = false }) => (
    <div className={ styles.goal }>
        <div className={ styles.titleBox } style={{ backgroundColor : colors[`${ type }Color`] }}>
            <span className={ styles.title }>{ isArea ? '영역 목표' : '내용범주 목표' }</span>
        </div>
        <div className={ styles.contentBox } style={{ backgroundColor : colors[`${ type }DetailColor`] }}>
            <AnswerInput isArea={ isArea } answer={ content } inputKey={ 'contentCategoryGoal' } idx={ 1 } isShow={ isShow } />
        </div>
    </div>
);

export default Goal;