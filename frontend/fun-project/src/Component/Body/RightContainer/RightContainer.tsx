import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  gap: 10px;
  flex: 6;
`;

const Products = styled.div`
  border: 1px solid black;
  max-height: 400px;
  max-width: 260px;
`;

const ImgContainer = styled.div`
  border: 1px solid black;
  max-height: 300px;
  padding: 2rem;
  margin: 2rem;
`;
export default function RightContainer(): React.ReactElement {
  return (
    <ProductContainer>
      <Products>
        <ImgContainer>
          <img src="#" />
        </ImgContainer>
      </Products>
    </ProductContainer>
  );
}
