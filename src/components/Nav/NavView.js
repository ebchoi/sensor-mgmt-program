import { useState, Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { Header, Nav } from '.';

export const NavView = () => {
  const [open, setOpen] = useState(true);

  return (
    <Fragment>
      <Header open={open} />
      <SidebarContainer>
        <SidebarWrapper open={open}>
          <MdOutlineArrowBackIosNew
            className={`${open ? 'top-6 right-4' : 'top-6 right-9 rotate-180'}
          absolute text-achromatic-bg_paper w-7 duration-300 cursor-pointer`}
            onClick={() => setOpen(!open)}
            alt="collapseButton"
          />
          <div className="flex items-center w-full p-4 border-b-2 border-blue-center_border">
            <h1>123</h1>
          </div>
          <Nav open={open} setOpen={setOpen} />
        </SidebarWrapper>
        <div className="bg-achromatic-bg_default h-auto flex-1 mt-16 p-7">
          <Outlet />
        </div>
      </SidebarContainer>
    </Fragment>
  );
};

const SidebarContainer = styled.div`
  display: flex;
`;

const SidebarWrapper = styled.div`
  position: sticky;
  top: 0;
  min-width: ${props => (props.open ? '228px' : '100px')};
  height: 100vh;
  z-index: 20;
  background-color: #2e2e2e;
  transition-duration: 300ms;
`;
