import { theme } from '@/styles/theme';
import styled from "styled-components";
export const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
  padding: 30px 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.background};
.logo{
    display:flex;
    gap:16px;
    text-decoration: none;
    align-items: center;
    color:${theme.colors.black};
    h1{
        max-width: 148px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
    }
}
.links{
    gap:64px;
    display: flex;
    .active{
         color:${theme.colors.blue};
    }
    a{
        text-decoration: none;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 25px;
        color:${theme.colors.black};
         &:hover{
             color:${theme.colors.blue};
            
        }
    }
}
 @media (max-width: ${theme.breakpoints.lg}) {
    .links{
        display: none;
    }
  }
   @media (max-width: ${theme.breakpoints.sm}) {
    padding: 26px 23px;
    .logo{
        img{
            width: 50px;
            height: 50px;
        }
        h1{
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
        }
    }
    
  }
`