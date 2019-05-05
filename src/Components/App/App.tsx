import React, { useState } from 'react';
import styles from './styles.scss';
import Router from '../Router';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className={ styles.app }>
            <Router isLoggedIn={ isLoggedIn } setIsLoggedIn={ setIsLoggedIn } />
        </div>
    );
}

export default App;