import React from 'react'
import ReactPaginate from 'react-paginate'
import { PaginationWrapper } from './Pagination.styles'

interface IPagination {
    onPageChange: (selectedItem: {
        selected: number;
    }) => void;
    pageCount: number;
    

}

const Pagination = ({onPageChange, pageCount}: IPagination) => {
  return (
      <PaginationWrapper>
          <ReactPaginate
              activeClassName={'item active '}
              breakClassName={'item break-me '}
              containerClassName={'pagination'}
              disabledClassName={'disabled-page'}
              nextClassName={"item next "}
              pageClassName={'item pagination-page '}
              previousClassName={"item previous"}
              breakLabel="..."
              nextLabel=">"
              onPageChange={onPageChange}
              pageRangeDisplayed={2}
              marginPagesDisplayed={2}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={() => null}
          />
    </PaginationWrapper>
  )
}

export default Pagination