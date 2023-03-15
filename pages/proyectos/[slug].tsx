import { GetStaticProps } from 'next';
import React from 'react'

interface Iproyect {
    slug: string
}

const Proyect = ({slug}:Iproyect) => {
  return (
      <div>{slug}</div>
  )
}

/* export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params as { slug: string };
    return {
        props: { slug },
        revalidate: 120,
    };
}; */

/* export async function getStaticPaths() {
    const data = await getAllLOs();

    const paths = data.map((officer: LoanOfficer) => ({
        params: { slug: [officer.slug] },
    }));
    const filteredPaths = paths.filter(
        ({ params }: { params: { slug: string[] } }) => params.slug[0]
    );

    return {
        paths: [{ params: { slug: [] } }, ...filteredPaths],
        fallback: true,
    };
} */

export default Proyect