import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BlogContainer = styled.div`
    background: #004a99;
    padding-bottom: 50px;
    justify-content: flex-start;
    align-content: center;
`

export const Title = styled.h1`
    text-align: center;
    padding: 50px 0px 20px 0px;
    font-size: 36px;
    color: #fff;
    font-weight: 500;
`

export const ImageContainer = styled.div`
    text-align: center;
    position: relative;
    overflow: visible;
    justify-content: center;
    align-items: baseline;
    display: block;
    transition: .4s ease-in-out;
    margin-bottom: 10px;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: space-evenly;
    width: 350px;
    height: 188px;
    animation: ease-in-out;
    padding:0 0 0 0;
    margin:0 0 0 0;
    position: relative;
    overflow: hidden;
    margin: 40px;
    background: #fff;
    box-shadow: 0 10px 29px 0 rgb(68 88 144 / 10%);
    transition: all 0.4s ease-in-out;
    text-decoration: none;
`

export const CardTitle = styled(Link)`
    color: #00458f;
    text-align: start;
    font-weight: bold;
    margin: 40px 8px 0px 8px;
    cursor: pointer;
    text-decoration: none;

    &:visited
        color: #000;
    }

    &:hover{
        color: #429dff;
    }
`