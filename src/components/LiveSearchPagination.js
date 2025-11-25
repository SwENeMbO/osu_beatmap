import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import SearchInput from './SearchInput'
import BeatmapPreview from './BeatmapPreview';

import './LiveSearchPagination.css';

const LiveSearchPagination = ({ data, itemsPerPage }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(0);

    // Filtrar los elementos que coincidan con el término de búsqueda
    const filteredData = data.filter(item =>
        item['name'].toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calcular el número total de páginas
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Calcular los índices de inicio y fin de los elementos a mostrar en la página actual
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Obtener los elementos a mostrar en la página actual
    const currentData = filteredData.slice(startIndex, endIndex);

    // Manejar el cambio de página
    const handlePageChange = selectedPage => {
        setCurrentPage(selectedPage.selected);
    };

    return (
        <div>
            <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            {currentData.map((item, index) => (
                <BeatmapPreview key={index} beatmap={item} />
            ))}

            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                pageCount={totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName={'pagination'}
                activeClassName={'active'}
                pageClassName={'page-item'}
                previousLinkClassName={'previousLinkClassName'}
                nextLinkClassName={'nextLinkClassName'}
            />
        </div>
    );
};

export default LiveSearchPagination;