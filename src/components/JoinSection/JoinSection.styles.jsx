import styled from 'styled-components';

export const JoinContainer = styled.div`
    background: #004a99;
`

export const Title = styled.h1`
    color: #fff;
    text-align: center;
    padding: 75px 0px 20px 0px;
    font-size: 36px;
    font-weight: 500;
`

export const SubTitle = styled.p`
    color: #fff;
    margin: 0px 175px 0px 175px;
    padding: 0px 75px 10px 75px;
    line-height: 1.6;
    justify-content: center;
    align-content: center;
    text-align: center;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-evenly;
    width: 400px;
    animation: ease-in-out;
    padding: 40px;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    margin: 40px;
    background: #00458f;
    box-shadow: 0 10px 29px 0 rgb(68 88 144 / 10%);
    transition: all 0.3s ease-in-out;

    &:hover{
        background: #000;
    }
`

export const ImageContainer = styled.div`
    color: #ecf5ff;
    overflow:  hidden;
    justify-content: center;
    align-self: center;
`

export const CardTitle = styled.h3`

`

export const CardBody = styled.p`
`

export const CardContent = styled.div`
    color: #fff;
    text-align: center;
`

export const NumberContainer= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: space-between;
`

export const NumberWrapper = styled.div`
`

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: space-evenly;
`

export const Number = styled.h1`
    color: #fff;
    font-size: 58px;
    align-self: center;
`

export const Text = styled.p`
    color: #ecf5ff;
    text-align: center;
`