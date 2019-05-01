import React from 'react';
import styles from './styles.scss';
import PageTitle from '../../Components/PageTitle';
import answerSheets from '../../data/answerSheets';
import InputColumn from '../../Components/InputColumn';

const { SUMMARY_SHEET } = answerSheets;

const Summary = () => (
    <div className={ styles.summary }>
        <PageTitle currentPageName="총론" />
        <div className={ styles.summaryBody }>
            {
                SUMMARY_SHEET.map(({ key, answerSheetName, answerSheet, detail }) => (
                    <InputColumn key={ key } columnKey={ key } answerSheetName={ answerSheetName } answerSheets={ answerSheet } detailSheets={ detail } />
                ))
            }
        </div>
    </div>
);

export default Summary;