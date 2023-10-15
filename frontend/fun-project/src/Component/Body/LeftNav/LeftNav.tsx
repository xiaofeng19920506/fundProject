import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid yellow;
  background-color: #f0f8ff;
  flex: 1;
`;

const NavItem = styled.div`
  border: 1px solid black;
  background-color: #f0f8ff;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

const NavLabel = styled.span`
  color: black;
`;

export default function LeftNav(): React.ReactElement {
  const navigate = useNavigate();
  const handleClick = (destination: string) => {
    navigate(`/${destination}`);
  };

  return (
    <NavContainer>
      <NavItem onClick={() => handleClick("Home")}>
        <NavLabel>Home</NavLabel>
      </NavItem>
    </NavContainer>
  );
}
