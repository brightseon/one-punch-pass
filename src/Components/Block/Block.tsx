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
            contentCategories.map(contentCategory => {
                console.log('contentCategory : ', contentCategory);
                
                return (
                    <div key={ contentCategory.key } className={ styles.row }>
                        <Goal isArea={ false } content={ contentCategory.contentCategoryGoal } type={ 'socialRelations' } />
                        <ContentCategory contentCategory={ contentCategory } />
                    </div>
                )
            })
        }
    </div>
);

export default Block;