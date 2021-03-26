import styled from 'styled-components';

export const SocietyContainer = styled.div`
    background: #ecf5ff;
    padding-bottom: 40px;
`

export const Title = styled.h1`
    text-align: center;
    padding: 50px 0px 20px 0px;
    font-size: 36px;
    color: #2f4456;
    font-weight: 500;
`

export const SubText = styled.p`
    margin: 0px 175px 0px 175px;
    padding: 0px 250px 10px 250px;
    line-height: 1.6;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #667785;
`

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: space-evenly;
`

export const MiniCard = styled.div`
    display: flex;
    flex-direction: column;
`

export const ImageContainer = styled.div`
    text-align: center;
    position: relative;
    overflow: visible;
    justify-content: center;
    align-items: baseline;
    display: block;
    transition: .4s ease-in-out;
    cursor: pointer;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: space-evenly;
    width: 350px;
    height: 200px;
    animation: ease-in-out;
    padding: 40px;
    position: relative;
    overflow: hidden;
    margin: 40px;
    background: #fff;
    box-shadow: 0 10px 29px 0 rgb(68 88 144 / 10%);
    transition: all 0.4s ease-in-out;
    cursor: pointer;

    &:hover ${ImageContainer}{
        transform: scale(1.2);
    }
`




