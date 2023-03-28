import { theme } from '@/styles/theme';
import styled from 'styled-components';
import { IframeStyled } from '../Landing/Message/Message.styles';

export const InstitutionWrapper = styled.div`
width: 100%;
margin-top: -80px;
display: flex;
flex-direction: column;
gap:50px;

.slider{
    position: relative;
    margin: 0 -110px;
    img{
       object-fit: cover;
       opacity: 0.75;
        height: 500px;
    }
    .slick-dots{
        position: absolute;
        bottom: 30px;
        li {

       button::before{
            opacity: unset;
            color:${theme.colors.mediumGray}
       }
    }
        .slick-active {

           button::before{
            opacity: unset;
            color:white
        }
    }
    }

    .slick-prev{
        width: fit-content;
        height: fit-content;
        left: 20px;
        z-index: 2;
        position: absolute ;
        :before{
           font-size: 32px ;
           opacity: unset;
        }
        
    }
    .slick-next{
        width: fit-content;
        height: fit-content;
        right: 30px;
        z-index: 2;
        position: absolute;
        :before{
           opacity: unset;
           font-size: 32px !important;
        }
    
    }
}

.section{
    display: flex;
    flex-direction: column;
    gap:16px;
    h1, h3{
        margin: 0;
        text-align: left;
    }
    p{
        white-space: pre-wrap;
    }
}

.video{
    position: relative;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    ${IframeStyled} {
        max-height:500px ;
        height: 500px ;
        width:80% ;
        iframe{
             max-height:500px ;
             height: 500px ;
        }
    }
}

.wrapper{
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    gap:24px;
     h1{
        font-size: 32px;
        line-height: 39px;
    }
    .projects{
        display: flex;
        gap:32px;
        flex-wrap: wrap;
        justify-content: center;
    }
    .contacts-wrapper{
        margin-right:-50px;
        width: fit-content;
        max-height:245px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: auto;
        grid-column-gap: 60px;
        grid-row-gap: 20px;
}
}


@media (max-width: ${theme.breakpoints.lg}) {
margin-top: -40px;
gap:30px;

.slider{
    margin: 0 -16px;
    img{
        height: 400px;
    }
     .slick-prev, .slick-next{
        display: none !important;
    }
}

.video{
    ${IframeStyled} {
       height: 250px;
       max-height: 250px;
       width: 100% ;
       iframe{
             max-height:250px ;
             height: 250px ;
        }
    }
}

  .wrapper{
    margin-top: 20px;
    h1{
        font-size: 20px;
        line-height: 24px;
    }
    .contacts-wrapper{
        margin-right:unset;
        max-height:unset;
         grid-template-columns: repeat(1, 1fr);
         .contact{
         width:100%;
    }
      }
  }
}

`