import React, { SFC, useState } from 'react';
import InputColumnPresetner from './InputColumnPresenter';
import { SummaryDetailAnswerType } from '../../types/types';

interface IProps {
    columnKey : string;
    answerSheetName : string;
    answerSheets : string[];
    detailSheets : SummaryDetailAnswerType[];
};

const InputColumnContainer : SFC<IProps> = ({ columnKey, answerSheetName, answerSheets, detailSheets }) => {
    const [isShow, toggleIsShow] = useState(false);

    const clickCheckButton = () => {
        toggleIsShow(true);
    };

    return <InputColumnPresetner columnKey={ columnKey } answerSheetName={ answerSheetName } answerSheets={ answerSheets } 
        detailSheets={ detailSheets } isShow={ isShow } clickCheckButton={ clickCheckButton } />;
};

export default InputColumnContainer;