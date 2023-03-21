import { institutionService } from '@/src/services/institutions';
import { AllInstitutionsResponse, Institution } from '@/src/types';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Pagination from '../Pagination/Pagination'
import InstitutionCard from './InstitutionCard/InstitutionCard';
import { InstitutionsWrapper } from './Institutions.styles'

const Institutions = () => {
    const [institutions, setInstitutions] = useState<Institution[]>([]);
    const router = useRouter()
    const [totalItems, setTotalItems] = useState(0)
    const [page, setPage] = useState(1);
    const itemsPerPage = 2;

    useEffect(() => {
        const getData = async () => {
            try {
                const response: AllInstitutionsResponse = await institutionService.getInstitutions(page, itemsPerPage)
                setInstitutions(response.data.items)
                setTotalItems(response.data.meta.totalItems)
            } catch (e) {
                console.log(e)
                router.push("/")
            }
        };
        getData();
    }, [page])

    const handlePageClick = (selectedItem: { selected: number; }) => {
        setPage(selectedItem.selected + 1);
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