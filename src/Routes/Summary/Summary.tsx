import React from 'react';
import styles from './styles.scss';
import PageTitle from '../../Components/PageTitle';
import AnswerInput from '../../Components/AnswerInput';
import answerSheets from '../../data/answerSheets';
import Button from '../../Components/Button';

const { SUMMARY_SHEET } = answerSheets;

const Summary = () => (
    <div className={ styles.summary }>
        <PageTitle currentPageName="총론" />
        <div className={ styles.summaryBody }>
            {
                SUMMARY_SHEET.map(({ key, answerSheetName, answerSheet, detail }) => (
                    <div key={ key } className={ styles.row }>
                        <div className={ styles.firstColumn }>
                            <span className={ styles.firstColumnTitle }>{ answerSheetName }</span>
                        </div>
                        <div className={ styles.lastColumn }>
                            {
                                answerSheet ? (
                                    <div className={ styles.answerInputBox }>
                                        {
                                            answerSheet.map((answer, idx) => (
                                                <AnswerInput key={ `answer_${ idx }` } idx={ idx } answer={ answer } />
                                            ))
                                        }
                                    </div>
                                ) : (
                                        detail.map(({ detailKey, detailName, detailSheet }) => (
                                            <div className={ styles.detailBox } key={ detailKey }>
                                                <div className={ styles.detailFirstColumnTitleBox }>
                                                    <span className={ styles.detailFirstColumnTitle }>{ detailName }</span>
                                                </div>
                                                <div className={ styles.detailLastColumnBox }>
                                                    {
                                                        detailSheet.map((detail, idx) => (
                                                            <AnswerInput key={ `detail_${ idx }` } idx={ idx } answer={ detail } />
                                                        ))
                                                    }
                                                    <Button text={ '확인' } />
                                                </div>
                                            </div>
                                        )
                                    )
                                )
                            }
                            { answerSheet && <Button text={ '확인' } /> }
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
);

export default Summary;