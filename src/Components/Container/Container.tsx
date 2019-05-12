import React, { SFC, Fragment } from 'react';
import { ClassType, ContentCategoriesType } from '../../types/types';
import Goal from '../Goal';
import Block from '../Block';

interface IProps {
    areaTarget : string;
    type : ClassType;
    contentCategries : ContentCategoriesType[];
};

const Container : SFC<IProps> = ({ areaTarget, type, contentCategries }) => (
    <Fragment>
        <Goal isArea={ true } content={ areaTarget } type={ type } />
        <Block contentCategories={ contentCategries } />
    </Fragment>
);

export default Container;