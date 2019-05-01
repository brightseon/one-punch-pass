import React, { SFC } from 'react';
import styles from './styles.scss';

interface IProps {
    text : string;
    clickCheckButton : () => void;
};

const Button : SFC<IProps> = ({ text, clickCheckButton }) => (
    <div className={ styles.container }>
        <button className={ styles.button } type="button" onClick={ clickCheckButton }>{ text }</button>
    </div>
);

export default Button;