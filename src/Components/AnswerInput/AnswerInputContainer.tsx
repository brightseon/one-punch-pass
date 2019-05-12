import React, { Component, ChangeEvent, ChangeEventHandler } from 'react';
import AnswerInputPresenter from './AnswerInputPresenter';

interface IProps {
    isIndex? : boolean;
    idx? : number;
    answer : string;
    inputKey : string;
    isShow : boolean;
    isArea? : boolean;
};

class AnswerInputContainer extends Component<IProps, any> {
    static defaultProps = {
        isArea : false
    };
    
    answer = this.props.answer;
    stateName = `${ this.props.inputKey }_answer_${ this.props.idx }`;
    state = {
        isFail : false,
        [this.stateName] : '',
        showGoal : this.props.isShow
    };

    typingAnswer : ChangeEventHandler = (e : ChangeEvent<HTMLInputElement>) => {
        const { target : { name, value } } = e;
        
        if(this.state[this.stateName] !== '' && value.length === 0) {
            this.resetAnswer();

            return;
        }
        
        this.setState({
            [name] : value
        }, this.correctCheck);
    };

    correctCheck = () => {
        const currentIsFail = this.props.answer !== this.state[this.stateName];

        this.setState((prevState : any) => {
            if(prevState.isFail !== currentIsFail) {
                return {
                    isFail : currentIsFail
                };
            }
        });
    };

    resetAnswer = () => {
        this.setState({
            [this.stateName] : '',
            isFail : false,
            showGoal : false
        });
    };

    onBlur = () => {
        const { isArea } = this.props;

        if(isArea && this.state[this.stateName] !== '') {
            this.setState({
                showGoal : true
            }, this.correctCheck);
        }
    };

    render() {
        const value = this.state[this.stateName];

        return <AnswerInputPresenter { ...this.props } value={ value } resetAnswer={ this.resetAnswer }
            typingAnswer={ this.typingAnswer } isFail={ this.state.isFail } onBlur={ this.onBlur } showGoal={ this.state.showGoal } />;
    }
};

export default AnswerInputContainer;