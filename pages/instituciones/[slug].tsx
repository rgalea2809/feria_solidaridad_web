import Institution from '@/src/components/Institution/Institution';
import Layout from '@/src/components/Layout/Layout';
import { institutionService } from '@/src/services/institutions';
import {  FullInstitution } from '@/src/types';
import { theme } from '@/styles/theme';
import { useRouter } from 'next/router';
import Notiflix from 'notiflix';
import React, { useEffect, useState } from 'react'

const InstitutionPage = () => {
    const [institutionData, setInstitution] = useState<FullInstitution>()
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
                const { slug } = router.query
                const insitution = await institutionService.getInstitutionBySlug(slug!!.toString());
                setInstitution(insitution)
            } catch (e) {
                router.push('/')
            }
        };
        getData();
        Notiflix.Loading.remove();
    }, [])

    return (
      <Layout>
            {institutionData ? <Institution institution={institutionData} /> : <div/>}
      </Layout>
  )
}

export default InstitutionPage