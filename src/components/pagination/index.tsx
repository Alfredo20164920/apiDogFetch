
import { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import FilterContext from '../../context/filter';
import { Container, Icon } from './styled';
import './styles.css';

import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'


const Component = () => {

  const {totalDogs, setFilter, filters} = useContext(FilterContext);
  const [currentPage, setCurrentPage] = useState(0)
  
  useEffect(() => {
    if(filters?.from === 0) {setCurrentPage(0)}
  }, [filters])
  

  const handlePageClick = (data: {selected: number}) => {
    setCurrentPage((data.selected))
    setFilter({breeds: filters?.breeds,from: (data.selected) * 25})
  }

  return (
    <Container>
      <ReactPaginate
          breakLabel="..."
          nextLabel={<Icon icon={faChevronRight}/>}
          previousLabel={<Icon icon={faChevronLeft}/>}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          renderOnZeroPageCount={null}
          pageCount={Math.round(((totalDogs ?? 0)) / 25)}
          onPageChange={handlePageClick}
          forcePage={currentPage}
          activeClassName='item active'
          breakClassName='item break-me'
          containerClassName={'pagination'}
          disabledClassName={'disabled-page'}
          pageClassName={'item pagination-page '}
          previousClassName={"item previous"}
          nextClassName={"item next"}
        />
    </Container>
  )
}

export {Component as Pagination}
export default Component