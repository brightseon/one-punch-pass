import React, { SFC } from 'react';
import styles from './styles.scss';
import { ContentCategoriesType } from '../../types/types';
import Piece from '../Piece';

interface IProps {
    contentCategories : ContentCategoriesType[];
};

const Block : SFC<IProps> = ({ contentCategories }) => (
    <div className={ styles.block }>
        {
            contentCategories.map(({ key, contentCategoryGoal, contentCategory }) => (
                <Piece key={ key } contentCategoryGoal={ contentCategoryGoal } contentCategory={ contentCategory } />
            ))
        }
    </div>
);

export default Block;