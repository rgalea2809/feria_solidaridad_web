import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const InstitutionsWrapper = styled.div`
display: flex;
min-height: calc(100vh - 151px - 155px);
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
    min-height: calc(100vh - 114px -378px);
    .institutions{
        width: 100%;
    }
}
`