import React, { Component, ChangeEvent, ChangeEventHandler, Ref } from 'react';
import AnswerInputPresenter from './AnswerInputPresenter';

interface IProps {
    isIndex? : boolean;
    idx? : number;
    answer : string;
    inputKey : string;
    isShow : boolean;
};

class AnswerInputContainer extends Component<IProps, any> {
    answer = this.props.answer;
    stateName = `${ this.props.inputKey }_answer_${ this.props.idx }`;
    state = {
        isFail : false,
        [this.stateName] : ''
    };

    typingAnswer : ChangeEventHandler = (e : ChangeEvent<HTMLInputElement>) => {
        const { target : { name, value } } = e;

        this.setState({
            [name] : value
        }, this.correctCheck);
    };

    correctCheck = () => {
        const isFail = this.props.answer !== this.state[`${ this.props.inputKey }_answer_${ this.props.idx }`];
        
        this.setState({
            isFail
        });
    };

    resetAnswer = () => {
        this.setState({
            [this.stateName] : '',
            isFail : false
        });
    };

    render() {
        const value = this.state[this.stateName];

        return <AnswerInputPresenter { ...this.props } value={ value } resetAnswer={ this.resetAnswer }
            typingAnswer={ this.typingAnswer } isFail={ this.state.isFail } />;
    }
};

export default AnswerInputContainer;