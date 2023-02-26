import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const LandingContainer = styled.div<{ show: boolean }>`
position: relative;
.navbar{
    z-index: ${({ show }) => (show ? '10' : '-1')};
    background-color: transparent;
    top: 0;
    left: 0;
    right: 0;
    opacity: ${({ show }) => (show ? '1' : '0')};
    position:sticky;
    transition: all 0.5s;

    div{
       background-color: ${({ show }) => (show ? '' : 'transparent !important')};
       transition: all 0.5s;
    }
}

.test{
    position: relative;
    margin-top: 100px;
    height: 1000px;
    top: ${({ show }) => (show ? '0' : "unset")};
    h1{
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 48px;
      line-height: 59px;
      color: ${theme.colors.lightOrange};
    }
}

.landing-image{
    position: relative;
    margin-top: -151px;
    top: 0;
    height: ${({ show }) => (show ? '400px' : "100vh")};
    transition: all 0.5s;
    background-color: ${({ show }) => (show ? 'transparent !important' : theme.colors.blue)};
    .content{
        display: ${({ show }) => (show ? 'none' : "flex")};
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
        flex-direction: column;
        padding-top: 66px;
        align-items: center;
        gap: 110px;    
        .header{
          width: 100%;
          background-color: rgba(205, 203, 203, 0.04);
          padding: 24px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap:16px;
          h1{
             max-width: 348px;
             font-family: 'Montserrat';
             font-style: normal;
             font-weight: 600;
             font-size: 48px;
             line-height: 59px;
             color: ${theme.colors.yellow};
             user-select: none;
             text-shadow: -0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black;
          }
        }

    }
      .image{
        height: ${({ show }) => (show ? '0px' : "100%")};
        background-image: url("/images/vida-uca.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        opacity: 0.8;
        
      }
}
@media (max-width: ${theme.breakpoints.lg}) {
    .landing-image{
      .content{
        padding-top: 140px;
        gap:48px;
        .logo-uca{
          height: 130px;
          width: 90px;
        }
         .header{
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .logo-feria{
            height: 120px;
            width: 120px;
          }
          h1{ 
            text-align: center;
            font-size: 36px;
            line-height: 44px;
          }
         }
      }
    }
  }
`