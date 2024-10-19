import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange, hasMore }) => {
  return (
    <div className="pagination">
      {hasMore && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          View More
        </button>
      )}
    </div>
  );
};

export default Pagination;

