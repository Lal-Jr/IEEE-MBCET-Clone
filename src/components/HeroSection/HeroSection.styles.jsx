import styled from 'styled-components';

export const HeroContainer = styled.div`
    color: #fff;
    padding: 160px;
`

export const HeroRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

`

export const HeroTextWrapper = styled.div`
    @media screen and(max - width: 768px){
        padding-bottom: 65px;
    }
`

export const Title = styled.h1`
    color: #1c2237;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600px;
    letter-spacing: 2px;
    padding: 5px 20px 5px 20px;
`

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 0px 0px 20px;
`

export const Divider = styled.div`
    width: 20px;
    height:auto;
    display:inline-block;
`

export const HeroImageWrapper = styled.div`
    max-width: 95%;
    padding-right: 0;
    margin: 0 0 0 10px;
`