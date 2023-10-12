import { HeaderProps } from "./Header.types";
import styled from "styled-components";
import Image from "../../assets/react.svg";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: pink;
`;

const Logo = styled.div`
  flex: 1;
  padding: 2rem 1rem 1rem 1rem;
`;
const SearchContainer = styled.div`
  flex: 1;
  padding: 2rem 1rem 1rem 1rem;
`;
const CategoryContainer = styled.div`
  flex: 1;
  padding: 2rem 1rem 1rem 1rem;
  display: flex;
  justify-content: flex-start;
`;

const Category = styled.div`
  flex: 1;
`;
const ImgContainer = styled.div`
  position: relative;
  left: 0;
  height: 100%;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 60%;
`;

const CategoryItem = styled.span``;

export default function Header({
  isAuthenticated,
}: HeaderProps): React.ReactElement {
  return (
    <HeaderContainer>
      <Logo>
        <ImgContainer>
          <img src={Image} />
        </ImgContainer>
      </Logo>
      <SearchContainer>
        <Input />
      </SearchContainer>
      <CategoryContainer>
        <Category>
          <CategoryItem>{"Home"}</CategoryItem>
        </Category>
        <Category>
          <CategoryItem>
            {isAuthenticated ? "Sign Out" : "Sign In"}
          </CategoryItem>
        </Category>
      </CategoryContainer>
    </HeaderContainer>
  );
}
