import Landing from '@/src/components/Landing/Landing'
import { homepageService } from '@/src/services/homepage';
import { imagesService } from '@/src/services/images';
import { HomePage, Image } from '@/src/types';
import { GetStaticProps } from 'next';

interface Ihome{
  images: Image[];
  homePage: HomePage;
}

export default function Home({ images, homePage }: Ihome) {
  return (
    <Landing images={ images} homePage={homePage} />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const images = await imagesService.getImages();
    const homePage = await homepageService.getHomePage();
    return {
      props: { images: images.data, homePage: homePage.data },
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
