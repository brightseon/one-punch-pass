import React, { SFC, ChangeEvent, KeyboardEvent, Ref } from 'react';
import styles from './styles.scss';
import Button from '../../Components/Button';
import ClearButton from '../../../images/clearButton.svg';

interface IProps {
    // setIsLoggedIn : Dispatch<SetStateAction<boolean>>;
    password : string;
    onChange : (e : ChangeEvent) => void;
    enterLogin : (e : KeyboardEvent) => void;
    passwordRef : Ref<HTMLInputElement>;
    resetPassword : () => void;
    login : () => void;
    isLoginFail : boolean;
};

const LoginPresenter : SFC<IProps> = ({ password, onChange, enterLogin, passwordRef, resetPassword, login, isLoginFail }) => (
    <div className={ styles.login }>
        <div className={ `${ styles.loginInputBox } ${ isLoginFail ? styles.loginFail : '' }` }>
            <input className={ styles.loginInput } type="password" value={ password } onChange={ onChange } onKeyPress={ enterLogin } ref={ passwordRef } />
            <img className={ styles.resetButton } src={ ClearButton } onClick={ resetPassword } />
        </div>
        <Button text={ '로그인' } clickCheckButton={ login } />
    </div>
);

export default LoginPresenter;