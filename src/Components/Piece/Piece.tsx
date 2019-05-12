import React, { SFC, useState } from 'react';
import styles from './styles.scss';
import { ContentCategoryType, ClassType } from '../../types/types';
import Goal from '../Goal';
import ContentCategory from '../ContentCategory';

interface IProps {
    contentCategoryGoal : string;
    contentCategory : ContentCategoryType;
    type : ClassType;
};

const Piece : SFC<IProps> = ({ contentCategoryGoal, contentCategory, type }) => {
    const [isShow, toggleIsShow] = useState(false);
    
    const showWrong = () => {
        if(!isShow) {
            toggleIsShow(true);
        }
    };
    
    return (
        <div className={ styles.row }>
            <Goal content={ contentCategoryGoal } type={ type } isShow={ isShow } />
            <ContentCategory contentCategory={ contentCategory } type={ type } isShow={ isShow } showWrong={ showWrong } />
        </div>
    );
};

export default Piece;