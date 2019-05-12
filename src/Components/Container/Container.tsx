import React, { SFC } from 'react';
import styles from './styles.scss';
import { ClassType, ContentCategoriesType } from '../../types/types';
import Goal from '../Goal';
import Block from '../Block';

interface IProps {
    areaTarget : string;
    type : ClassType;
    contentCategries : ContentCategoriesType[];
};

const Container : SFC<IProps> = ({ areaTarget, type, contentCategries }) => (
    <div className={ styles.container }>
        <Goal isArea={ true } content={ areaTarget } type={ type } />
        <Block contentCategories={ contentCategries } type={ type } />
    </div>
);

export default Container;