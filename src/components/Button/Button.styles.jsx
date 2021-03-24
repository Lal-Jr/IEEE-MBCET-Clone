import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#000' : 'transparent')} ;
    white-space: nowrap;
    padding: ${({ big }) => ( big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#fff' : '#000')};
    font-size: ${({ fontBig }) => ( fontBig ? '20px' : '16px')};
    outline: none;
    text-decoration: none;
    border: 2px solid #000;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#000' : '#3385ff')};
        color: ${({ dark }) => (dark ? '#000' : '#fff')};
        border: 2px solid #3385ff;
        
    }
`;