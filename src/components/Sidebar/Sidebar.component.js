import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Breadcrumbs, Nav } from './index.component';

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarWrapper>
        <SidebarTitle>
          <h1>TEAM 06</h1>
        </SidebarTitle>
        <Nav />
      </SidebarWrapper>

      <ContentsWrapper>
        <Breadcrumbs />
        <ContentsArea>
          <Outlet />
        </ContentsArea>
      </ContentsWrapper>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  display: flex;
`;

const SidebarWrapper = styled.header`
  position: sticky;
  top: 0;
  width: 228px;
  height: 100vh;
  z-index: 20;
  background-color: #2e2e2e;
`;

const SidebarTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 16px;
  border-bottom: 2px solid #e2e2e2;

  h1 {
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
  }
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentsArea = styled.main`
  margin: 64px 0 0;
  padding: 28px;
`;
