import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const PaginationWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
  .pagination{
    display: flex;
    flex-wrap:wrap;
    list-style: none;
    gap:32px;
    justify-content: center;
    padding-left: 0;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 16px;
    .item{
        a {
           padding: 12px 16px;
        }

    }
    .previous{
        margin-right:42px;
    }
    .next{
        margin-left:42px;
    }
     .next, .previous{
        a {
            background-color: ${theme.colors.lightGray};
            padding: 12px 16px;
            border-radius: 100%;
            &:hover{
                cursor: pointer;
                background-color: ${theme.colors.mediumGray};

            }
            &:disabled{
                cursor:not-allowed;
                background-color: ${theme.colors.lightGray};

            }
        }
        }

    .pagination-page{

        a{
         border: 1.5px solid transparent;

        &:hover{
        border: 1.5px solid ;
        border-radius: 6px;
        cursor: pointer;
        }
    }
    }

    .active{
        a{
        color:${theme.colors.blue} !important;
        border: 1.5px solid ;
        border-radius: 6px;
        }
    }
    .disabled-page{
        a{
        cursor:not-allowed !important;
        background-color: ${theme.colors.lightGray} !important;
        }
    }
  }
`