import React, { SFC, Ref, Component } from 'react';
import styles from './styles.scss';
import { SummaryDetailAnswerType } from '../../types/types';
import Button from '../Button';
import AnswerInput from '../AnswerInput';

interface IProps {
    columnKey : string;
    answerSheetName : string;
    answerSheets : string[];
    detailSheets : SummaryDetailAnswerType[];
    isShow : boolean;
    clickCheckButton : () => void;
};

const InputColumn : SFC<IProps> = ({ columnKey, answerSheetName, answerSheets, detailSheets, isShow, clickCheckButton }) => (
    <div key={ columnKey } className={ styles.row }>
        <div className={ styles.firstColumn }>
            <span className={ styles.firstColumnTitle }>{ answerSheetName }</span>
        </div>
        <div className={ styles.lastColumn }>
            {
                answerSheets ? (
                    <div className={ styles.answerInputBox }>
                        {
                            answerSheets.map((answerSheet, idx) => (
                                <AnswerInput key={ `answer_${ idx }` } inputKey={ columnKey } idx={ idx } answer={ answerSheet } isShow={ isShow } />
                            ))
                        }
                    </div>
                ) : (
                        detailSheets.map(({ detailKey, detailName, detailSheet }) => (
                            <div className={ styles.detailBox } key={ detailKey }>
                                <div className={ styles.detailFirstColumnTitleBox }>
                                    <span className={ styles.detailFirstColumnTitle }>{ detailName }</span>
                                </div>
                                <div className={ styles.detailLastColumnBox }>
                                    {
                                        detailSheet.map((detail, idx) => (
                                            <AnswerInput key={ `detail_${ idx }` } inputKey={ columnKey } idx={ idx } answer={ detail } isShow={ isShow } />
                                        ))
                                    }
                                    <Button text={ '확인' } clickCheckButton={ clickCheckButton } />
                                </div>
                            </div>
                        )
                    )
                )
            }
            { answerSheets && <Button text={ '확인' } clickCheckButton={ clickCheckButton } /> }
        </div>
    </div>
);

export default InputColumn;