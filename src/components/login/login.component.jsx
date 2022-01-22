import React from 'react';
import PerfilLogin from '../perfilLogin/perfilLogin.component';

import {
    HomePageLoginTitle,
    HomePageLoginButtom,
    HomepageLogin
} from './loginElements'

const Login = ({ nameButtom, temLogin, onClick, user }) => {
    return (
        <HomepageLogin>
            <HomePageLoginTitle>Login</HomePageLoginTitle>

            {
                temLogin && <PerfilLogin user={user} />
            }

            <HomePageLoginButtom onClick={onClick}>{nameButtom}</HomePageLoginButtom>
        </HomepageLogin>
    )
};

export default Login;
