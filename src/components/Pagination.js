import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';

function Pagination(props) {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 10;

    useEffect(() => {
        console.log(props.filteredBeatmaps);
        setData(props.filteredBeatmaps);
        setTotalPages(Math.ceil(data.length / itemsPerPage));
    }, []);


    let startIndex = currentPage * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    const subset = data.slice(startIndex, endIndex);


    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    return (
        <div>
            {
                subset.map((item) => (
                    <div key={item.id}>{item.name}</div>
                ))
            },
            <ReactPaginate
                pageCount={totalPages}
                onPageChange={handlePageChange}
                forcePage={currentPage}
                previousLabel={"<<"}
                nextLabel={">>"}
                breakLabel={"..."}
            // containerClassName={"pagination-container"}
            // activeClassName={"active-page"}
            />
        </div>
    );
}

export default Pagination;