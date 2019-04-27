import React, { SFC } from 'react';
import { Helmet } from 'react-helmet';
import { APP_NAME } from '../../utils/utils';

interface IProps {
    currentPageName : string;
};

const PageTitle : SFC<IProps> = ({ currentPageName }) => (
    <Helmet>
        <title>{ APP_NAME } | { currentPageName }</title>
    </Helmet>
);

export default PageTitle;