import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const InstitutionCardWrapper = styled.div`
position: relative;
background: rgba(205, 203, 203, 0.14);
width: 100%;
max-width: 380px;
height: 280px;
display: flex;
padding: 30px 20px;
flex-direction: column;
border-radius: 10px;
gap:20px;

.header{
    display: flex;
    gap:14px;
    align-items: center;

    img{
        background-color: ${theme.colors.white};
        border-radius: 100%;
        object-fit: contain;
        height: 80px;
        width: 80px;
    }
    h1{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
    }
}

.description{
   text-overflow: ellipsis;
   overflow: hidden;
   display: -webkit-box;
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   -webkit-line-clamp: 4; /* number of lines to show */
           line-clamp: 4; 
   -webkit-box-orient: vertical;
}


a{
    position: absolute;
    bottom:16px;
    align-self: flex-end;
    text-decoration: none;
}
@media (max-width: ${theme.breakpoints.lg}) {
    height: fit-content;
   
        a{
          margin-top:24px;
          position: relative;
          align-self: flex-end;
          text-decoration: none;
}
}
`