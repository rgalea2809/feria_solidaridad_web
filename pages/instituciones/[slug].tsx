import Institution from '@/src/components/Institution/Institution';
import Layout from '@/src/components/Layout/Layout';
import { institutionService } from '@/src/services/institutions';
import {  FullInstitution, Institution as InstitutionType } from '@/src/types';
import { GetStaticProps } from 'next';
import React from 'react'

const InstitutionPage = ({institution}: {institution: FullInstitution}) => {
    return (
      <Layout>
            <Institution institution={institution} />
      </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params as { slug: string };
    try {
        const institution = await institutionService.getInstitutionBySlug(slug);
        return {
            props: { institution: institution },
            revalidate: 120,
        };
    } catch {
        return {
            props: {},
            redirect: {
                destination: "/",
            },
        }
    }
};

export async function getStaticPaths() {
    const response = await institutionService.getInstitutions()

    const paths = response.data.items.map((institution: InstitutionType) => ({
        params: {
            slug: institution.slug
        },
    }));

    return {
        paths: paths,
        fallback: false
    };
}


export default InstitutionPage