import React from "react";
import ReactPaginate from "react-paginate";
import "./PaginationBar.css";

const PaginationBar = (props) => {
  return (
    <div className="h-48bg-orange-50">
      <ReactPaginate
        nextLabel=">>"
        previousLabel="<<"
        breakLabel="..."
        forcePage={props.currentPage}
        pageCount={props.totalPages}
        renderOnZeroPageCount={null}
        onPageChange={props.handlePageChange}
        className="pagination"
        activeClassName="active-page"
        previousClassName="previous-page"
        nextClassName="next-page"
      />
    </div>
  );
};

export default PaginationBar;
