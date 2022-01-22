import React from 'react';
import { GitHub, Linkedin } from 'react-feather';
import Login from '../../components/login/login.component';

import {
    HomepageContainer,
    HomepageContent,
    HomepageTitle,
    HomepageSubTitle,
    HomePageItem,
    HomepageFooter
} from './homepageElements'

import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

const Homepage = ({ currentUser }) => {
    return (
        <HomepageContainer>
            <HomepageContent>
                <HomepageTitle>Login com Google</HomepageTitle>
                <HomepageSubTitle>
                    Exemplo prático com o login do Google com <br />
                    ReactJs + Styled-Components + Firebase + responsividade
                </HomepageSubTitle>

                <HomePageItem href="https://github.com/guilhermeparente17/login-firebase" target="_blank">
                    <GitHub size="28" style={{ marginRight: '11px' }} />
                    Link do repositorio
                </HomePageItem>

                <HomePageItem href="https://www.linkedin.com/in/guilherme-parente-758015150/" target="_blank">
                    <Linkedin size="28" style={{ marginRight: '11px' }} />
                    Link do Linkedin
                </HomePageItem>

                <HomepageFooter>
                    Feito por Guilherme Parente
                </HomepageFooter>


            </HomepageContent>
            {
                currentUser ?
                    (
                        <Login user={currentUser} nameButtom="Logout" temLogin={true} onClick={() => auth.signOut()} />
                    )
                    :
                    (
                        <Login nameButtom="Login com o google" onClick={signInWithGoogle} temLogin={false} />
                    )
            }
        </HomepageContainer>
    )
};

export default Homepage;
