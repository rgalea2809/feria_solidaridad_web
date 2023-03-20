import Layout from '@/src/components/Layout/Layout';
import { projectsService } from '@/src/services/proyects';
import { Project } from '@/src/types';
import { GetStaticProps } from 'next';
import React from 'react'

interface Iproyect {
    slug: string
}

const Proyect = ({ slug }: Iproyect) => {
    return (
        <Layout>
            <div>{slug}</div>

        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params as { slug: string };
    return {
        props: { slug },
        revalidate: 120,
    };
};

export async function getStaticPaths() {
    const data =
        [
            {
                "id": "18",
                "title": "test",
                "imageUrl": "https://picsum.photos/1200/700",
                "modality": "test",
                "hours": 100
            },
            {
                "id": "19",
                "title": "test",
                "imageUrl": "https://picsum.photos/1200/700",
                "modality": "test",
                "hours": 100
            },
            {
                "id": "20",
                "title": "Programa de Becas Mártires de la UCA",
                "imageUrl": "https://picsum.photos/1200/700",
                "modality": null,
                "hours": null
            },
            {
                "id": "21",
                "title": "test",
                "imageUrl": "https://picsum.photos/1200/700",
                "modality": "test",
                "hours": 100
            },
            {
                "id": "22",
                "title": "test",
                "imageUrl": "https://picsum.photos/1200/700",
                "modality": "test",
                "hours": 100
            },
            {
                "id": "23",
                "title": "Programa de Becas Mártires de la UCA",
                "imageUrl": "https://picsum.photos/1200/700",
                "modality": null,
                "hours": null
            },
            {
                "id": "24",
                "title": "test",
                "imageUrl": "https://picsum.photos/1200/700",
                "modality": "test",
                "hours": 100
            },
            {
                "id": "25",
                "title": "test",
                "imageUrl": "https://picsum.photos/1200/700",
                "modality": "test",
                "hours": 100
            },
            {
                "id": "26",
                "title": "Programa de Becas Mártires de la UCA",
                "imageUrl": "https://picsum.photos/1200/700",
                "modality": null,
                "hours": null
            }
        ];
// change to cosume the service
    const paths = data.map((project: Project) => ({
        params: { slug: project.id },
    }));

    return {
        paths: paths,
        fallback: false
    };
}

export default Proyect