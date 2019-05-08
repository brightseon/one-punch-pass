import React, { SFC, ChangeEvent } from 'react';
import styles from './styles.scss';
import ClearButton from '../../../images/clearButton.svg';

interface IProps {
    isIndex? : boolean;
    idx? : number;
    inputKey : string;
    value : any;
    typingAnswer : (e : ChangeEvent) => void;
    isFail : boolean;
    isShow : boolean;
    resetAnswer : () => void;
    onBlur : () => void;
    showGoal : boolean;
};

const AnswerInputPresenter : SFC<IProps> = ({ isIndex = false, idx, inputKey, value, typingAnswer, isFail, isShow, resetAnswer, onBlur, showGoal }) => (
    <div className={ styles.answerInput }>
        {
            isIndex && (
                <div className={ styles.indexBox }>
                    <span className={ styles.index }>{ `${ idx + 1 }.` }</span>
                </div>
             )
        }
        <div className={ `${ styles.inputBox } ${ (isShow && isFail) || (showGoal && isFail) ? styles.failInput : '' }` }>
            <input className={ styles.input } name={ `${ inputKey }_answer_${ idx }` } type="text" value={ value } onChange={ typingAnswer } autoComplete="off" onBlur={ onBlur } />
            <div className={ styles.resetBtnBox } onClick={ resetAnswer }>
                <img className={ styles.resetBtn } src={ ClearButton } />
            </div>
        </div>
    </div>
);

export default AnswerInputPresenter;