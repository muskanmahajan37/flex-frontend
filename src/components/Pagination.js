import React from 'react';

import '../style/pagination.css';


const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const itemsNumber = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    itemsNumber.push(i);
  }

  return (
    <div>
      <ul className='pagination'>
        {itemsNumber.map((item) =>
          currentPage === item ? (
            <li key={item} className='page-item'>
              <a
                className='page-link'
                style={{
                  background: '#1cbe88',
                  color: 'white',
                  cursor: 'pointer',
                }}
                onClick={() => paginate(item)}
              >
                {item}
              </a>
            </li>
          ) : (
            <li key={item} className='page-item'>
              <a
                className='page-link'
                style={{
                  backgroundColor: 'white',
                  color: '#1cbe88',
                  cursor: 'pointer',
                }}
                onClick={() => paginate(item)}
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Pagination;
