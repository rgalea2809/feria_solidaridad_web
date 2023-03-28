import styled from 'styled-components';
import { theme } from './theme';

export const PrimaryButton = styled.button`
 width: fit-content;
 background-color: ${theme.colors.yellow};
 border: none;
 border-radius: 20px;
 color:${theme.colors.black};
 font-family: 'Montserrat';
 font-style: normal;
 font-weight: 500;
 font-size: 16px;
 line-height: 20px;
 padding: 9px 19px;
 text-decoration: none;
 &:hover{
    cursor: pointer;
    opacity: 0.85;
 }
`
