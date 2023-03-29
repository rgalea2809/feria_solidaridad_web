import Landing from '@/src/components/Landing/Landing'
import { homepageService } from '@/src/services/homepage';
import { imagesService } from '@/src/services/images';
import { HomePage as HomeType, Image } from '@/src/types';
import { theme } from '@/styles/theme';
import { useRouter } from 'next/router';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';



export default function Home() {
  const [images, setimages] = useState<Image[]>();
  const [homePage, setHomePage] = useState<HomeType>();
  const router = useRouter();

  useEffect(() => {
    Notiflix.Loading.init({
      className: 'notiflix-loading',
      zindex: 4000,
      backgroundColor: 'rgba(0,0,0,0.8)',
      rtl: false,
      fontFamily: 'Quicksand',
      cssAnimation: true,
      cssAnimationDuration: 400,
      clickToClose: false,
      customSvgUrl: null,
      customSvgCode: null,
      svgSize: '80px',
      svgColor: theme.colors.gray,
      messageID: 'NotiflixLoadingMessage',
      messageFontSize: '15px',
      messageMaxLength: 34,
      messageColor: '#dcdcdc',
    });
  }, []);

  useEffect(() => {
    Notiflix.Loading.dots()
    const getData = async () => {
      try {
        const imageResponse = await imagesService.getImages();
        const homePageResponse = await homepageService.getHomePage();
        setimages(imageResponse.data)
        setHomePage(homePageResponse.data)
        Notiflix.Loading.remove();
      } catch (e) {
        router.push("404")
      }
    };
    getData();
  }, [])

  return (
    <Landing images={images} homePage={homePage} />
  )
}