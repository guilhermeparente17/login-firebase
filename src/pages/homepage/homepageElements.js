import styled from 'styled-components'

export const HomepageContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`

export const HomepageContent = styled.section`
    width: 70%;
    background-color: #2284CB;
    display: flex;
    flex-direction: column;
    padding: 152px 62px 51px;
    position: relative;
    box-shadow: 3px 0 20px 2px #000;

    @media screen and (max-width: 1100px){
        display: none;
    }
`

export const HomepageTitle = styled.h1`
    font-family: 'Satisfy', cursive;
    font-size: 72px;
    color: #fff;
    font-weight: 400;
    margin-bottom: 42px;
`
export const HomepageSubTitle = styled.h3`
    font-family: 'Sarpanch', sans-serif;
    color: #fff;
    font-weight: 400;
    font-size: 24px;
    margin-bottom: 42px;
`

export const HomePageItem = styled.a`
    margin: 15px 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
    width: 200px;
`

export const HomepageFooter = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 10px;
    font-family: Satisfy;
    color: #fff;
    font-size: 18px;
    margin-top: -50px;
`

