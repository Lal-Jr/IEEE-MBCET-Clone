import styled from 'styled-components';

export const ContactContainer = styled.div`
    background: #fff;
    padding-bottom: 40px;
`

export const Title = styled.div`
    text-align: center;
    padding: 50px 0px 20px 0px;
    font-size: 36px;
    color: #2f4456;
    font-weight: 500;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
`

export const ContactCol = styled.div`
`

export const WrapperGrid = styled.div``

export const FormContainer = styled.div`
`

export const ContactText = styled.div`
    margin-left: 20px;
`

export const Form = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
`

export const Label = styled.div`
    display: block;
`

export const Input = styled.div`
    border: 1px solid #667785;
    padding: 1em;
    width: 100%;
`

export const Textarea = styled.div`
    border: 1px solid #667785;
    padding: 1em;
    width: 100%;
`

export const Divider = styled.div`
    width: 80px;
    height:auto;
    display:inline-block;
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    color: #2f4456;
`

export const Button = styled.div`
    border-radius: 50px;
    background: #00458f;
    white-space: nowrap;
    padding: 12px 30px;
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    border: 2px solid #00458f;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    font-weight: bold;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #3385ff;
        color: #fff;
        border: 2px solid #3385ff;

    }
`