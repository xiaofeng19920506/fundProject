import styled from "styled-components";
import Pagination from "../Pagination/Pagination";
const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  gap: 10px;
`;

const Products = styled.div`
  border: 1px solid black;
  max-height: 400px;
  min-height: 280px;
  max-width: 260px;
`;

const ImgContainer = styled.div`
  border: 1px solid black;
  max-height: 200px;
  padding: 2rem;
  margin: 2rem 2rem 0 2rem;
`;

const DescriptionContainer = styled.div`
  padding: 0 2rem;
`;

const Description = styled.span``;
const PriceContainer = styled.div`
  padding: 0 2rem;
  margin: 1rem 0;
`;

const ButtonContainer = styled.div`
  padding-left: 2rem;
  display: flex;
`;
const Button = styled.span`
  background-color: green;
  color: white;
  width: 80%;
  text-align: center;
`;
const Price = styled.span`
  color: red;
  font-weight: 500;
`;
const Container = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
`;

const FilterContainer = styled.div`
  width: 100%;
  text-align: end;
`;

const Filter = styled.span`
  color: black;
  background-color: grey;
  margin-right: 2rem;
  width: 100%;
`;
export default function RightContainer(): React.ReactElement {
  return (
    <Container>
      <FilterContainer>
        <Filter>{"Adcance Filter"}</Filter>
      </FilterContainer>
      <ProductContainer>
        <Products>
          <ImgContainer>
            <img src="#" />
          </ImgContainer>
          <DescriptionContainer>
            <Description>{"testing produc description"}</Description>
          </DescriptionContainer>
          <PriceContainer>
            <Price>{`$ 100`}</Price>
          </PriceContainer>
          <ButtonContainer>
            <Button>{`Add to Cart`}</Button>
          </ButtonContainer>
        </Products>
      </ProductContainer>
      <Pagination currentPage={1} totalPage={10} />
    </Container>
  );
}
