import styled from 'styled-components'

export const HomepageLogin = styled.section`
    width: 30%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -50px;

    @media screen and (max-width: 1100px){
        width: 100%;
        background-color: #2284CB;
    }
`

export const HomePageLoginTitle = styled.h1`
    font-family: 'Satisfy', cursive;
    font-size: 72px;
    font-weight: 400;
    color: #2284CB;
    margin-bottom: 32px;

    @media screen and (max-width: 1100px){
        color: #fff;
    }
`

export const HomePageLoginButtom = styled.button`
    width: 222px;
    height: 54px;
    background-color: #2284CB;
    border:none;
    color: #fff;
    cursor: pointer;
    font-size: 18px;

    &:hover{
        background-color: #1B5BE3;
    }

    @media screen and (max-width: 1100px){
        background-color: #fff;
        color: #2284CB;

        &:hover{
            background-color: #FFFAFA;
        }
    }
`