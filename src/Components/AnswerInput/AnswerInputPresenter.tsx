import React, { SFC, ChangeEvent } from 'react';
import styles from './styles.scss';
import ClearButton from '../../../images/clearButton.svg';

interface IProps {
    idx : number;
    inputKey : string;
    value : any;
    typingAnswer : (e : ChangeEvent) => void;
    isFail : boolean;
    isShow : boolean;
    resetAnswer : () => void;
};

const AnswerInputPresenter : SFC<IProps> = ({ idx, inputKey, value, typingAnswer, isFail, isShow, resetAnswer }) => (
    <div className={ styles.answerInput }>
        <div className={ styles.indexBox }>
            <span className={ styles.index }>{ `${ idx + 1 }.` }</span>
        </div>
        <div className={ `${ styles.inputBox } ${ (isShow && isFail) ? styles.failInput : '' }` }>
            <input className={ styles.input } name={ `${ inputKey }_answer_${ idx }` } type="text" value={ value } onChange={ typingAnswer } autoComplete="off" />
            <div className={ styles.resetBtnBox } onClick={ resetAnswer }>
                <img className={ styles.resetBtn } src={ ClearButton } />
            </div>
        </div>
    </div>
);

export default AnswerInputPresenter;