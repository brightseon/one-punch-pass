import React, { SFC } from 'react';
import styles from './styles.scss';

interface IProps {
    text : string;
};

const Button : SFC<IProps> = ({ text }) => (
    <div className={ styles.container }>
        <button className={ styles.button } type="button">{ text }</button>
    </div>
);

export default Button;