import React from 'react';

const SearchInput = ({ searchTerm, setSearchTerm }) => {
    return (
        <input
            className='search-bar-input'
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{
                borderRadius: '11px',
                width: '1054px',
                borderColor: 'rgb(241, 53, 109)',
                height: '40px',
                fontSize: 'x-large',
            }}
        />
    );
};

export default SearchInput;