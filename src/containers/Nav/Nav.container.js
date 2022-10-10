import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { deviceSizes, device } from '../../styles/Theme';
import { Breadcrumbs, Sidebar } from '../../components/index.components';

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
  flex-direction: column;
  width: 100vw;
  max-width: fit-content;
  min-width: ${deviceSizes.mobile};

  ${device.tablet} {
    width: 100vw;
  }
  ${device.desktop} {
    width: 100%;
    margin-left: 228px;
    flex-direction: row;
  }
`;

const ContentsWrapper = styled.div`
  width: 100%;
  min-width: ${deviceSizes.mobile};
  ${device.desktop} {
    width: calc(100% - 228px);
    display: flex;
    flex-direction: column;
  }
`;

const ContentsArea = styled.main`
  margin: 64px 0 0;
  width: 100%;
  padding: 28px;
`;
