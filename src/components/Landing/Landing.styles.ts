import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const LandingContainer = styled.div<{ show: boolean }>`
position: relative;
display: flex;
flex-direction: column;
.navbar{
    z-index: ${({ show }) => (show ? '3' : '-1')};
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

.content{
    position: relative;
    padding:80px 110px 150px 110px;
    align-self:center;
    max-width: 1400px;
    position: relative;
    top: ${({ show }) => (show ? '0' : "unset")};
    display:flex;
    flex-direction: column;
    gap: 137px;
}

.landing-image{
    position: relative;
    margin-top: -151px;
    top: 0;
    height: ${({ show }) => (show ? '400px' : "100vh")};
    transition: all 0.5s;
    background-color: ${({ show }) => (show ? 'transparent !important' : theme.colors.blue)};
    .landing-content{
        position:relative;
        display: ${({ show }) => (show ? 'none' : "flex")};
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
        flex-direction: column;
        padding-top: 66px;
        align-items: center;
        .logo-uca{
          height: 22vh;
          width: 8vw;
          align-self: flex-start;
          margin-left: 40px;
        }
        .header{
          position: absolute;
          bottom:120px;
          width: 100%;
          background-color: rgba(205, 203, 203, 0.2);
          padding: 24px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap:32px;
          h1{
             max-width: 348px;
             font-family: 'Montserrat';
             font-style: normal;
             font-weight: 600;
             font-size: 48px;
             line-height: 59px;
             color: ${theme.colors.white};
             user-select: none;
             text-shadow: -0.6px 0 black, 0 0.6px black, 0.6px 0 black, 0 -0.6px black;
          }
        }

    }
      .image{
        height: ${({ show }) => (show ? '0px' : "100%")};
        background-image: url("/servicio-social/feria-solidaridad/images/vida-uca4.jpeg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        opacity: 0.85;
        
      }
}
@media (max-width: ${theme.breakpoints.lg}) {
    .landing-image{
      height: ${({ show }) => (show ? '400px' : "110vh")};
      .landing-content{
        padding-top: 140px;
        gap:48px;
        .logo-uca{
          margin-left: unset;
          align-self: center;
          margin-top: -60px;
          height: 160px;
          width: 110px;
        }
         .header{
          bottom:0;
          margin-bottom: 180px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap:0px;
          background-color: rgba(205, 203, 203, 0.1);
          .logo-feria{
            height: 180px;
            width: 180px;
          }
          h1{ 
            text-align: center;
            font-size: 36px;
            line-height: 44px;
          }
         }
      }
    }
    .content{
      padding: 40px 16px 80px 16px;
      gap: 47px;
    }
  }
`