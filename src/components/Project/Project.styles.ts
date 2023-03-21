import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const ProjectWrapper = styled.div`
width: 100%;
margin-top: -80px;
display: flex;
flex-direction: column;
gap:50px;

img{
    object-fit: cover;
    height: 500px;
    width: 100vw;
    margin: 0 -110px;
}
.header{
    margin-bottom:20px;
}
.section{
    display: flex;
    flex-direction: column;
    gap:16px;
    h1, h3{
        margin: 0;
        text-align: left;
    }
    ul{
        li{
            p{
                margin: 8px;
            }
        }
    }
}
.inline-section{
    display: flex;
    gap:8px;
    h3{
        margin: 0;
        display: inline;
    }
    p{
        margin: 0;
    }
    a{
        color:${theme.colors.black}
    }
}
@media (max-width: ${theme.breakpoints.lg}) {
margin-top: -40px;
gap:30px;

img{
    margin: 0 -16px;
    height: 400px;
}
}
`