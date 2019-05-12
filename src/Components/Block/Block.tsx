import React, { SFC } from 'react';
import styles from './styles.scss';
import { ContentCategoriesType, ClassType } from '../../types/types';
import Piece from '../Piece';

interface IProps {
    contentCategories : ContentCategoriesType[];
    type : ClassType
};

const Block : SFC<IProps> = ({ contentCategories, type }) => (
    <div className={ styles.block }>
        {
            contentCategories.map(({ key, contentCategoryGoal, contentCategory }) => (
                <Piece key={ key } contentCategoryGoal={ contentCategoryGoal } contentCategory={ contentCategory } type={ type } />
            ))
        }
    </div>
);

export default Block;