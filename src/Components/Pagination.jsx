import React from 'react';
import '../style/index.css'

const Pagination = ({ pages, currentPage, onPageChange }) => {
  const pageNumbers = Array.from({ length: pages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      {pageNumbers.map(number => (
        <button
          key={number}
          className={currentPage === number ? 'active' : ''}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
