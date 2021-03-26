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
    padding: 0px 325px 10px 325px;
    line-height: 1.6;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: space-evenly;
    width: 400px;
    height: 200px;
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

export const CardTitle = styled.h3`
    padding: 0px 0px 20px 0px;
`

export const CardBody = styled.p`
    align-items: center;
`

export const CardContent = styled.div`
    color: #fff;
    text-align: center;
`

export const NumberContainer= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: space-between;
    padding-bottom: 25px;
`

export const ImageContainer = styled.div`
    justify-content: center;
    align-items: center;
    padding: 0px 800px 25px 800px;
`

export const NumberWrapper = styled.div`
`

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: space-evenly;
`

export const Number = styled.h1`
    color: #fff;
    font-size: 58px;
    text-align: center;
`

export const Text = styled.p`
    color: #ecf5ff;
    text-align: center;
`

export const MiniCard = styled.div`
    display: flex;
    flex-direction: column;
`