import React, { SFC } from 'react';
import styles from './styles.scss';

interface IProps {
    idx : number;
    answer : string;
    detail? : string[];
};

const AnswerInput : SFC<IProps> = ({ idx, answer, detail }) => (
    <div className={ styles.answerInput }>
        <div className={ styles.indexBox }>
            <span className={ styles.index }>{ `${ idx + 1 }.` }</span>
        </div>
        <div className={ styles.inputBox }>
            <input className={ styles.input } name={ `answer_${ idx }` } type="text" value={ '' } onChange={ null } />
            <input className={ `${ styles.hiddenInput } ${ styles.input }` } name={ `result_${ idx }` } type="text" value={ answer } readOnly />
        </div>
    </div>
);

export default AnswerInput;