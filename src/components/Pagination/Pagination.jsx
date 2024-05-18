// import React from "react";
// import { Button } from "./PaginationStyles";

// const Pagination = ({
//   handlePrevPage,
//   handleNextPage,
//   currentPage,
//   totalResults,
//   itemsPerPage,
// }) => {
//   return (
//     <div>
//       <Button onClick={handlePrevPage} disabled={currentPage === 1}>
//         Previous Page
//       </Button>
//       <Button
//         onClick={handleNextPage}
//         disabled={currentPage >= Math.ceil(totalResults / itemsPerPage)}
//       >
//         Next Page
//       </Button>
//     </div>
//   );
// };

// export default Pagination;


import React from "react";
import { Button, Container } from "./PaginationStyles";

const Pagination = ({
  onPrevPageClick,
  onNextPageClick,
  prevBtnDisabled,
  nextBtnDisabled
}) => {
  return (
    <Container>
      <Button onClick={onPrevPageClick} disabled={prevBtnDisabled} >
      &lt; Previous Page 
      </Button>
      <Button
        onClick={onNextPageClick}
        disabled={nextBtnDisabled}
      >
        Next Page &gt;
      </Button>
    </Container>
  );
};

export default Pagination;
