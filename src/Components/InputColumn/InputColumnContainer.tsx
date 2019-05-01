import React, { Component, createRef, Ref, SFC, FunctionComponentElement, FunctionComponent, RefObject } from 'react';
import InputColumnPresetner from './InputColumnPresenter';
import { SummaryDetailAnswerType } from '../../types/types';

interface IState {
    isShow : boolean;
};

interface IProps {
    columnKey : string;
    answerSheetName : string;
    answerSheets : string[];
    detailSheets : SummaryDetailAnswerType[];
};

class InputColumnContainer extends Component<IProps, IState> {
    state = {
        isShow : false
    };

    clickCheckButton = () => {
        console.log('확인 버튼 클릭');

        this.setState({
            isShow : true
        });
    };

    render() {
        const { isShow } = this.state;

        return <InputColumnPresetner { ...this.props } isShow={ isShow } clickCheckButton={ this.clickCheckButton } />;
    };
}

export default InputColumnContainer;