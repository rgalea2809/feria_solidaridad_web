import Layout from '@/src/components/Layout/Layout';
import Project from '@/src/components/Project/Project';
import { projectsService } from '@/src/services/proyects';
import { FullProject, Project as ProjectType } from '@/src/types';
import { GetStaticProps } from 'next';
import React from 'react'

interface IProject {
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
    try {
        const project = await projectsService.getProjectBySlug(slug);
        return {
            props: { project: project },
            revalidate: 120,
        };

    } catch {
        return {
            props: {},
            revalidate: 120,
            redirect: {
                destination: "/",
            },
        }

    }
};

export async function getStaticPaths() {
    const response = await projectsService.getProjects()

    const paths = response.data.items.map((project: ProjectType) => ({
        params: {
            slug: project.slug
        },
    }));

    return {
        paths: paths,
        fallback: false
    };
}

export default ProjectPage