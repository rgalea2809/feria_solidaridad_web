import Layout from '@/src/components/Layout/Layout';
import Project from '@/src/components/Project/Project';
import { projectsService } from '@/src/services/proyects';
import { FullProject, Project as ProjectType } from '@/src/types';
import { GetStaticProps } from 'next';
import React from 'react'

interface IProject{
    project: FullProject
}



const ProjectPage = ({ project }: IProject) => {
    return (
        <Layout>
            <Project project={project} />
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params as { slug: string };

    const project = await projectsService.getProjectById(slug);
    return {
        props: { project : project },
        revalidate: 120,
    };
};

export async function getStaticPaths() {
    const response = await projectsService.getProjects()
        
    const paths = response.data.items.map((project: ProjectType) => ({
        params: {
            slug: (project.id).toString()
        },
    }));

    return {
        paths: paths,
        fallback: false
    };
}

export default ProjectPage