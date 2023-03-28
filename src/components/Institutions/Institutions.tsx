import { institutionService } from '@/src/services/institutions';
import { AllInstitutionsResponse, Institution } from '@/src/types';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Pagination from '../Pagination/Pagination'
import InstitutionCard from './InstitutionCard/InstitutionCard';
import { InstitutionsWrapper } from './Institutions.styles'
import Notiflix from 'notiflix/build/notiflix-loading-aio';
import { theme } from '@/styles/theme';

const Institutions = () => {
    const [institutions, setInstitutions] = useState<Institution[]>([]);
    const router = useRouter()
    const [totalItems, setTotalItems] = useState(0)
    const [page, setPage] = useState(1);
    const itemsPerPage = 4;

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
                const response: AllInstitutionsResponse = await institutionService.getInstitutions(page, itemsPerPage)
                setInstitutions(response.data.items)
                setTotalItems(response.data.meta.totalItems)
            } catch (e) {
                router.push("/")
            }
        };
        getData();
        Notiflix.Loading.remove();
    }, [page])

    const handlePageClick = (selectedItem: { selected: number; }) => {
        setPage(selectedItem.selected + 1);
        window.scrollTo({top:0, behavior:'smooth'})
    };
    return (
        <InstitutionsWrapper>
            <div className='institutions'>
                {institutions.map((institution, index) => <InstitutionCard key={index} {...institution} />)}
            </div>

            <Pagination
                onPageChange={handlePageClick}
                pageCount={totalItems > itemsPerPage ? Math.ceil(totalItems / itemsPerPage) : 0}
            />
        </InstitutionsWrapper>
    )
}

export default Institutions