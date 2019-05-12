import React, { SFC, useState } from 'react';
import styles from './styles.scss';
import { ContentCategoryType } from '../../types/types';
import Goal from '../Goal';
import ContentCategory from '../ContentCategory';

interface IProps {
    contentCategoryGoal : string;
    contentCategory : ContentCategoryType;
};

const Piece : SFC<IProps> = ({ contentCategoryGoal, contentCategory }) => {
    const [isShow, toggleIsShow] = useState(false);
    
    const showWrong = () => {
        toggleIsShow(true);
    };
    
    return (
        <div className={ styles.row }>
            <Goal content={ contentCategoryGoal } type={ 'socialRelations' } isShow={ isShow } />
            <ContentCategory contentCategory={ contentCategory } type={ 'socialRelations' } isShow={ isShow } showWrong={ showWrong } />
        </div>
    );
};

export default Piece;