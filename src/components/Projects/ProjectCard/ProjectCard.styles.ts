import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const ProjectCardStyle = styled.div`
position: relative;
display: flex;
flex-direction: column;
min-height: 357px;
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
    .info{
        a{
          margin-top:24px;
          position: relative;
          align-self: flex-end;
          text-decoration: none;
}
}
}

`