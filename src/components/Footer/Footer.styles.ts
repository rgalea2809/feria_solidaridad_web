import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const FooterContainer = styled.div`

padding: 40px 45px;
background-color: ${theme.colors.blue};
display: flex;
justify-content: space-between;
align-items: flex-end;

h1{
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 300;
   font-size: 16px;
   line-height: 19px; 
   color: ${theme.colors.white};
   margin: 0;
  }
.university{
    display: flex;
    gap:16px;
    align-items: flex-end;
  h1{
    max-width: 213px;
  }
}
.institution-mobile{
   display:none;
}

.social-media{
    display: flex;
    gap:28px;
    a {
        p{
            display: none;
        }
    }
}

@media (max-width: ${theme.breakpoints.lg}) {
    padding: 24px 16px;
    align-items: flex-start;
    gap:28px;
    flex-direction: column;
    justify-content: flex-start;
    .institution-mobile{
        display: block;
        width: 100%;
        text-align: center;
    }
    .institution{
        display: none;
    }
    .social-media{
        width: 100%;
        justify-content: space-around;
        flex-direction: column;
        gap:16px;
     a{
        text-decoration: none;
        display: flex;
        gap:16px;
        align-items: center;
        p{
            display: block;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 16px;
            color: ${theme.colors.white};
        }
    }
    }
}

`