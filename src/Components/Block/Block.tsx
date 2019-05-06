import React, { SFC } from 'react';
import styles from './styles.scss';
import Goal from '../Goal';
import { ContentCategoriesType } from '../../types/types';
import ContentCategory from '../ContentCategory';

interface IProps {
    contentCategories : ContentCategoriesType[];
};

const Block : SFC<IProps> = ({ contentCategories }) => (
    <div className={ styles.block }>
        {
            contentCategories.map(({ key, contentCategoryGoal, contentCategory }) => (
                <div key={ key } className={ styles.row }>
                    <Goal isArea={ false } content={ contentCategoryGoal } type={ 'socialRelations' } />
                    <ContentCategory contentCategory={ contentCategory } type={ 'socialRelations' } />
                </div>
            ))
        }
    </div>
);

export default Block;