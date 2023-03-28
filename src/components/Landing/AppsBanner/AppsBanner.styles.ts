import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const AppsBannerContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap:88px;
.app{
display: flex;
gap:38px;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;

.app-name{
    display: flex;
    align-items: center;
    gap:16px;
}

h2{
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 500;
   font-size: 24px;
   line-height: 28px; 
   color: ${theme.colors.blue}
}

.platforms{
     display: flex;
     gap: 16px;
    a{
        text-decoration: none;
    }
}
}
 @media (max-width: ${theme.breakpoints.lg}) {
    .app{
        gap: 12px;
        .app-name{
            gap:0px;
            img{
                width:45px;
                height: 50px;
            }
        h2{
            font-size: 16px;
            line-height: 20px;
        }
    }
        .platforms{
            gap:8px;
            img{
              width: 35px;
              height: 35px;
            }
        }
    
    }
 }
`