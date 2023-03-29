import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const MessageContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
gap:28px;

   h1{
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 48px;
      line-height: 59px;
      color: ${theme.colors.blue};
    }
    .video{
        position: relative;
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        gap:24px;
        .message{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 24px;
            p{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 300;
                text-align: center;
                font-size: 24px;
                line-height: 28px;
            }
            h2{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 24px;
                line-height: 28px;
                color: ${theme.colors.gray};
                opacity: 0.75;
            }
        }
    }
    @media (max-width: ${theme.breakpoints.lg}) {
        gap:29px;
        h1{
            font-size: 32px;
            line-height: 39px;
            max-width: 259px;
            margin: 0;
        }
        .video{
            gap: 32px;
            flex-direction: column;
            max-height: unset;
            .message{
                width: 100%;
                p, h2{
                    font-size: 16px;
                    line-height: 19px;
                }
            }
        }

    }
`
export const IframeStyled = styled.div`
  overflow: hidden;
  position: relative;
  height: 500px;
  width: 90%;
  max-height: 500px;
  iframe {
    padding: 0px;
    margin: 0px;
    overflow: hidden;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-height: 500px;
  }
  @media screen and (max-width: ${theme.breakpoints.lg}) {
    width: 100%;
    height: 250px;
  }
`;
