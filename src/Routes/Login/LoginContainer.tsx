import React, { SFC, useState, ChangeEvent, ChangeEventHandler, SetStateAction, KeyboardEventHandler, KeyboardEvent, useEffect, useRef, Ref } from 'react';
import LoginPresenter from './LoginPresenter';

interface IProps {
    // setIsLoggedIn : Dispatch<SetStateAction<boolean>>;
    setIsLoggedIn : (value : SetStateAction<boolean>) => void;
};

const LoginContainer : SFC<IProps> = ({ setIsLoggedIn }) => {
    const passwordRef : Ref<HTMLInputElement> = useRef();
    const [password, setPassword] = useState('');
    const [isLoginFail, setLoginFail] = useState(false);
    
    const focus = () => {
        passwordRef.current.focus();
    };
    
    useEffect(focus);

    const onChange : ChangeEventHandler = (e : ChangeEvent<HTMLInputElement>) => {
        const { target : { value } } = e;
        
        resetLoginFail();

        setPassword(value);
    };
    
    const login = () => {
        console.log('password : ', password);
        console.log('process.env.PASSWORD : ', process.env.PASSWORD);
        if(password === process.env.PASSWORD) {
            setIsLoggedIn(true);
        } else {
            setLoginFail(true);
        }
    };

    const enterLogin : KeyboardEventHandler = (e : KeyboardEvent<HTMLInputElement>) => {
        const { key } = e;
        
        if(key === 'Enter') {
            login();
        }
    };

    const resetLoginFail = () => {
        if(isLoginFail) {
            setLoginFail(false);
        }
    };

    const resetPassword = () => {
        if(password.length > 0) {
            setPassword('');
            resetLoginFail();
        }
    };

    return <LoginPresenter enterLogin={ enterLogin } login={ login } onChange={ onChange }
        password={ password } passwordRef={ passwordRef } resetPassword={ resetPassword }
        isLoginFail={ isLoginFail } />;
}

export default LoginContainer;