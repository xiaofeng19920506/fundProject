import styled from "styled-components";
import { PagionationProps } from "./Pagination.types";

const PaginationContainer = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
`;

const IndexContainer = styled.div`
  height: 20px;
  width: 20px;
  border: 1px solid black;
  padding: 10px;
  display: flex;
`;
const PagesIndex = styled.span`
  text-align: center;
  width: 100%;
`;

const Pagination: React.FC<PagionationProps> = ({ currentPage, totalPage }) => {
  const pageArray: number[] = Array.from(
    { length: totalPage },
    (_value, index) => index + 1
  );

  return (
    <PaginationContainer>
      {pageArray.length > 0 ? (
        pageArray.map((page) => {
          return (
            <IndexContainer>
              <PagesIndex>{page}</PagesIndex>
            </IndexContainer>
          );
        })
      ) : (
        <PagesIndex>{currentPage}</PagesIndex>
      )}
    </PaginationContainer>
  );
};

export default Pagination;
