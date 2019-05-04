import React, { SFC, useState, ChangeEvent, ChangeEventHandler, SetStateAction, KeyboardEventHandler, KeyboardEvent, useEffect, useRef, Ref } from 'react';
import LoginPresenter from './LoginPresenter';

interface IProps {
    // setIsLoggedIn : Dispatch<SetStateAction<boolean>>;
    setIsLoggedIn : (value : SetStateAction<boolean>) => void;
};

const LoginContainer : SFC<IProps> = ({ setIsLoggedIn }) => {
    const passwordRef : Ref<HTMLInputElement> = useRef();
    const [password, setPassword] = useState('');
    
    const focus = () => {
        passwordRef.current.focus();
    };
    
    useEffect(focus);

    const onChange : ChangeEventHandler = (e : ChangeEvent<HTMLInputElement>) => {
        const { target : { value } } = e;
        
        setPassword(value);
    };

    const login = () => {
        if(password === process.env.PASSWORD) {
            setIsLoggedIn(true);
        }
    };

    const enterLogin : KeyboardEventHandler = (e : KeyboardEvent<HTMLInputElement>) => {
        const { key } = e;
        
        if(key === 'Enter') {
            login();
        }
    };

    const resetPassword = () => {
        if(password.length > 0) {
            setPassword('');
        }
    };

    return <LoginPresenter enterLogin={ enterLogin } login={ login } onChange={ onChange }
        password={ password } passwordRef={ passwordRef } resetPassword={ resetPassword } />;
}

export default LoginContainer;