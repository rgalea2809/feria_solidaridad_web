import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
    overflow: hidden !important;
    padding:80px 110px 150px 110px;
    @media (max-width: ${theme.breakpoints.lg}) {
          padding: 40px 16px 80px 16px;
    }
`