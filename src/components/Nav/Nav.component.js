import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Breadcrumbs, Sidebar } from './index.component';

export const Nav = () => {
  return (
    <NavContainer>
      <Sidebar />
      <ContentsWrapper>
        <Breadcrumbs />
        <ContentsArea>
          <Outlet />
        </ContentsArea>
      </ContentsWrapper>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentsArea = styled.main`
  margin: 64px 0 0;
  width: fit-content;
  padding: 28px;
`;
