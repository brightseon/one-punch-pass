import React, { SFC } from 'react';
import styles from './styles.scss';
import { ContentCategoryType, ClassType } from '../../types/types';
import AnswerInput from '../AnswerInput';
import Button from '../Button';

interface IProps {
    contentCategory : ContentCategoryType;
    type : ClassType;
};

const ContentCategory : SFC<IProps> = ({ contentCategory : { title, details }, type }) => {
    return (
        <div className={ styles.container }>
            <div className={ styles.contentCategory }>
                <div className={ styles.title }>
                    <span>내용범주</span>
                </div>
                <div className={ styles.subTitle }>
                    <div className={ styles.content }>
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
                <div className={ `${ styles.mainTitle } ${ styles[type] }` }>
                    <AnswerInput inputKey={ type } answer={ title } isShow={ false } />
                </div>
                <div className={ styles.detailBox }>
                    {
                        details.map(({ key, name, detailSheets }) => (
                            <div key={ key } className={ styles.detailRow }>
                                <div className={ `${ styles.detailTitle } ${ styles[`${ type }Detail`] }`}>
                                    <AnswerInput inputKey={ key } answer={ name } isShow={ false } />
                                </div>
                                <div className={ styles.detailContent }>
                                    {
                                        detailSheets.map(({ three, four, five }, idx) => (
                                            <div key={ idx } className={ styles.content }>
                                                <div className={ `${ styles.three } ${ three === four ? styles.threeFourMerge : '' } ${ (three === four && three === five) ? styles.threeFourFiveMerge : '' }` }>
                                                    { three && <AnswerInput inputKey={ `three_${ idx }` } answer={ three } isShow={ false } /> }
                                                </div>
                                                {
                                                    three !== four && (
                                                        <div className={ `${ styles.four } ${ four === five ? styles.fourFiveMerge : '' }` }>
                                                            { four && <AnswerInput inputKey={ `four_${ idx }` } answer={ four } isShow={ false } /> }
                                                        </div>
                                                    )
                                                }
                                                {
                                                    four !== five && (
                                                        <div className={ styles.five }>
                                                            { five && <AnswerInput inputKey={ `five_${ idx }` } answer={ five } isShow={ false } /> }
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
            <Button text="확인" clickCheckButton={ null } />
        </div>
    )
};

export default ContentCategory;