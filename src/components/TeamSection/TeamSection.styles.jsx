import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TeamContainer = styled.div`
    box-shadow: 15px 0px 30px 0.5px rgba(127, 137, 161, 0.25);
    clip-path: inset(0px 0px -15px 0px);
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
    padding: 0px 250px 40px 250px;
    line-height: 1.6;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #667785;
`

export const CircleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
    align-items: center;
    transition: 0.2s;
`
export const Overlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: .4s ease;
    background-color: #004a99;
`

export const TextWrapper = styled.div`
    color: #fff;
    position: absolute;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 175px;
    top: 30%;
    display: none;
`

export const ImageContainer = styled.div`
    text-align: center;
    margin-bottom: 20px;
    position: relative;
    border-radius:50% 50% 50% 50%;
    overflow: hidden;
    height: 175px;
    width: 175px;
    margin: 0px 20px 0px 20px;
    justify-content: center;
    align-items: center;
    
    &:hover ${Overlay} {
        opacity: 0.7;
    }
    &:hover ${TextWrapper} {
        display: block;
    }
`

export const TeamLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    color: #667785;

    &:visited{
        color:#429dff;
    }
`

export const Name = styled.div`
    font-size: 16px;
    font-weight: 900;
    text-align: center;
    margin: 5px 8px 5px 8px;
`

export const Position = styled.div`
    font-size: 13px;
    margin: 0px 8px 0px 8px;
`