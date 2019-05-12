import React, { SFC } from 'react';
import styles from './styles.scss';
import { ContentCategoryType, ClassType } from '../../types/types';
import AnswerInput from '../AnswerInput';
import Button from '../Button';
import colors from '../../variables/_colors.scss';

interface IProps {
    contentCategory : ContentCategoryType;
    type : ClassType;
    isShow : boolean;
    showWrong : () => void;
};

const ContentCategory : SFC<IProps> = ({ contentCategory : { title, details }, type, isShow, showWrong }) => {
    return (
        <div className={ styles.container }>
            <div className={ styles.contentCategory }>
                <div className={ `${ styles.title }` } style={{ backgroundColor : colors[`${ type }Color`] }}>
                    <span>내용범주</span>
                </div>
                <div className={ styles.subTitle }>
                    <div className={ styles.content } style={{ backgroundColor : colors[`${ type }DetailColor`] }}>
                        <span>내용</span>
                    </div>
                    <div className={ styles.age }>
                        <div className={ styles.three }>
                            <span>3세</span>
                        </div>
                        <div className={ styles.four }>
                            <span>4세</span>
                        </div>
                        <div className={ styles.five }>
                            <span>5세</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={ styles.contentCategoryBox }>
                <div className={ `${ styles.mainTitle }` } style={{ backgroundColor : colors[`${ type }Color`] }}>
                    <AnswerInput inputKey={ type } answer={ title } isShow={ isShow } />
                </div>
                <div className={ styles.detailBox }>
                    {
                        details.map(({ key, name, detailSheets }) => (
                            <div key={ key } className={ styles.detailRow }>
                                <div className={ styles.detailTitle } style={{ backgroundColor : colors[`${ type }DetailColor`] }} >
                                    <AnswerInput inputKey={ key } answer={ name } isShow={ isShow } />
                                </div>
                                <div className={ styles.detailContent }>
                                    {
                                        detailSheets.map(({ three, four, five }, idx) => (
                                            <div key={ idx } className={ styles.content }>
                                                <div className={ `${ styles.three } ${ three === four ? styles.threeFourMerge : '' } ${ (three === four && three === five) ? styles.threeFourFiveMerge : '' }` }>
                                                    { three && <AnswerInput inputKey={ `three_${ idx }` } answer={ three } isShow={ isShow } /> }
                                                </div>
                                                {
                                                    three !== four && (
                                                        <div className={ `${ styles.four } ${ four === five ? styles.fourFiveMerge : '' }` }>
                                                            { four && <AnswerInput inputKey={ `four_${ idx }` } answer={ four } isShow={ isShow } /> }
                                                        </div>
                                                    )
                                                }
                                                {
                                                    four !== five && (
                                                        <div className={ styles.five }>
                                                            { five && <AnswerInput inputKey={ `five_${ idx }` } answer={ five } isShow={ isShow } /> }
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Button text="확인" clickCheckButton={ showWrong } />
        </div>
    )
};

export default ContentCategory;