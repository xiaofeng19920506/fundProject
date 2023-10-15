import styled from "styled-components";
import LeftNav from "./LeftNav/LeftNav";
import RightContainer from "./RightContainer/RightContainer";

const BodyContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export default function HomeBody() {
  return (
    <BodyContainer>
      <LeftNav />
      <RightContainer />
    </BodyContainer>
  );
}
