import { Routes, Route } from "react-router-dom";
import HomeBody from "./Body/HomeBody";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styled from "styled-components";

const AppContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default function Home(): React.ReactElement {
  return (
    <AppContainer>
      <Header isAuthenticated={false} />
      <Routes>
        <Route path="/" element={<HomeBody />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}
