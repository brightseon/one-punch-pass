import React, { SFC, ChangeEvent } from 'react';
import styles from './styles.scss';

interface IProps {
    idx : number;
    inputKey : string;
    value : any;
    typingAnswer : (e : ChangeEvent) => void;
    isFail : boolean;
    isShow : boolean;
};

const AnswerInputPresenter : SFC<IProps> = ({ idx, inputKey, value, typingAnswer, isFail, isShow }) => (
    <div className={ styles.answerInput }>
        <div className={ styles.indexBox }>
            <span className={ styles.index }>{ `${ idx + 1 }.` }</span>
        </div>
        <div className={ styles.inputBox }>
            <input className={ `${ styles.input } ${ (isShow && isFail) ? styles.failInput : '' }` } name={ `${ inputKey }_answer_${ idx }` } type="text" value={ value } onChange={ typingAnswer } autoComplete="off" />
        </div>
    </div>
);

export default AnswerInputPresenter;