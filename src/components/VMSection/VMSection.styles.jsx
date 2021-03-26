import styled from 'styled-components';

export const VMContainer = styled.div``

export const Title = styled.h1`
    text-align: center;
    padding: 75px 0px 20px 0px;
    font-size: 36px;
    color: #283d50;
    font-weight: 500;
`

export const SubTitle = styled.p`
    margin: 0px 175px 0px 175px;
    padding: 0px 75px 10px 75px;
    line-height: 1.6;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    animation: ease-in-out;
    padding: 40px;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    margin: 40px;
    background: #fff;
    box-shadow: 0 10px 29px 0 rgb(68 88 144 / 10%);
    transition: all 0.3s ease-in-out;

    &:hover{
    transform: scale(1.02);
    }
`
export const ImageContainer = styled.div`
    overflow:  hidden;
    justify-content: center;
    align-self: center;
    width: 50%;
`

export const CardContent = styled.div`
    margin: 1rem;
    margin-top: 0.5rem;
`

export const CardTitle = styled.h3`
    margin-bottom: 0.5rem;
`

export const CardBody = styled.div``

export const Divider = styled.div`
    width: 20px;
    height:auto;
    display:inline-block;
`

export const VMRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: space-between;
    padding-top: 25px;
    padding-bottom: 50px;
`