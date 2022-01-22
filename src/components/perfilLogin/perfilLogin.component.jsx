import React from 'react';

import {
    PerfilLoginContainer,
    PerfilLoginImage,
    PerfilLoginName,
    PerfilLoginEmail
} from './perfilLoginElements'

const PerfilLogin = ({ user }) => {
    console.log(user.multiFactor.user.photoUrl)
    console.log(user.multiFactor.user)
    return (
        <PerfilLoginContainer>
            <PerfilLoginImage src={user.multiFactor.user.photoURL} />

            <PerfilLoginName>{user.multiFactor.user.displayName}</PerfilLoginName>

            <PerfilLoginEmail>{user.multiFactor.user.email}</PerfilLoginEmail>
        </PerfilLoginContainer>
    )
};

export default PerfilLogin;
