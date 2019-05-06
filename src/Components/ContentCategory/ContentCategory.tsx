import React, { SFC } from 'react';
import styles from './styles.scss';
import { ContentCategoriesType } from '../../types/types';

interface IProps {
    contentCategory : ContentCategoriesType;
};

const ContentCategory : SFC<IProps> = ({ contentCategory }) => (
    <div className={ styles.container }>
        <div className={ styles.contentCategory }>
            <div className={ styles.title }>
                <span>내용범주</span>
            </div>
            <div className={ styles.subTitle }>
                <div className={ styles.content }>
                    <span>내용</span>
                </div>
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
);

export default ContentCategory;