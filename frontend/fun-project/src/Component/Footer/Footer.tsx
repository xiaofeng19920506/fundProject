import styled from "styled-components";

const CategoryContainer = styled.div`
  flex: 1;
  padding: 2rem 1rem 1rem 1rem;
  display: flex;
  justify-content: flex-start;
  background-color: violet;
`;

const Category = styled.div`
  flex: 1;
`;

const CategoryItem = styled.span``;

export default function Footer(): React.ReactElement {
  return (
    <CategoryContainer>
      <Category>
        <CategoryItem>{"Home"}</CategoryItem>
      </Category>
      <Category>
        <CategoryItem>{"Terms and Condition"}</CategoryItem>
      </Category>
    </CategoryContainer>
  );
}
