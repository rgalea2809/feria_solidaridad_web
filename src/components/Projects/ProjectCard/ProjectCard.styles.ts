import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const ProjectCardStyle = styled.div`
position: relative;
display: flex;
flex-direction: column;
height: 357px;
width: 100%;
background: rgba(205, 203, 203, 0.14);
max-width: 468px;
 img{
        width: 100%;
        height: 150px;
        object-fit: cover;
     }

.info{
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat';
    padding: 16px 19px 16px 35px;
    gap:15px;
h1 {
    margin: 0;
    margin-bottom:15px;
    text-align: end;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2; 
    -webkit-box-orient: vertical;
}
p{
   margin: 0;
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   line-height: 24px; 
}
a{
    position: absolute;
    bottom:16px;
    align-self: flex-end;
    text-decoration: none;
}
}
@media (max-width: ${theme.breakpoints.lg}) {
    height: unset;
    .info{
        a{
          margin-top:24px;
          position: relative;
          align-self: flex-end;
          text-decoration: none;
}
p{
    font-size: 14px;
    line-height: 17px;
}
h1{
    font-size: 16px;
    line-height: 19px;
    height: unset;
     text-overflow: ellipsis;
     -webkit-line-clamp: unset; /* number of lines to show */
   line-clamp: unset; 
   -webkit-box-orient: vertical;
}
}
}

`