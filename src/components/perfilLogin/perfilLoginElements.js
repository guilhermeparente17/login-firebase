import styled from 'styled-components'

export const PerfilLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const PerfilLoginImage = styled.img`
    width: 150px;
    height: 150px;
    background-repeat: no-repeat;
    border-radius: 50%;
    /* @media screen and (max-width: 1100px){
        
    } */
`

export const PerfilLoginName = styled.span`
    margin: 40px 0px 31px 0px;
    font-size: 24px;
    color: #2284CB;
    font-weight: bold;

    @media screen and (max-width: 1100px){
        color: #fff;
    }
`

export const PerfilLoginEmail = styled.span`
    margin: 31px 0px 100px 0px;
    font-size: 18px;
    color: #2284CB;
    font-weight: bold;

    @media screen and (max-width: 1100px){
        color: #fff;
    }
`