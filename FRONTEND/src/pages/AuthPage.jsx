import React, { useState } from 'react'
import LoginForm from '../components/Login-Form'
import RegisterForm from '../components/Register-Form';

const AuthPage = () => {
const [login, setLogin] = useState(true);

    return (
        <>
        {login ? <LoginForm state={setLogin} /> : <RegisterForm state={setLogin} />}
        </>
    );
}

export default AuthPage