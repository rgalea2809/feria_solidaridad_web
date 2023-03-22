import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const ContactWrapper = styled.div`
min-width:263px;
.contact {
  display: flex;
  gap: 24px;
  align-items: center;
  img{
    height: 60px;
    width: 60px;
  }
  p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
  }

}
  a{
    text-decoration:none;
    color: ${theme.colors.black};
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    .contact{
        width: 100%;
        p{
            overflow:hidden;
            white-space:nowrap;
            width:60vw;
            text-overflow:ellipsis;
            font-size: 16px;
            line-height: 19px;
        }
    }
  }


`