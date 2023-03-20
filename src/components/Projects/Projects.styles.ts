import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const ProjectsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:84px;
.projects{
    width:90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap:48px;
    flex-wrap:wrap;
}

@media (max-width: ${theme.breakpoints.lg}) {
    .projects{
        width: 100%;

    }

}

`
