import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const InstitutionsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:84px;

.institutions{
    width:90%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap:48px;
    flex-wrap:wrap;
}

@media (max-width: ${theme.breakpoints.lg}) {
    .institutions{
        width: 100%;
    }
}
`