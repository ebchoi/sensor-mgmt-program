import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdSensors } from 'react-icons/md';
import { RiUmbrellaFill } from 'react-icons/ri';

export const Sidebar = () => {
  const MENU_DATA = [
    {
      menu_id: 1,
      title: 'Sensor List',
      icon: <MdSensors />,
      URL: '/',
    },
    {
      menu_id: 2,
      title: 'Weather Info',
      URL: '/dashboard',
      icon: <RiUmbrellaFill />,
    },
  ];

  return (
    <SidebarWrapper>
      <SidebarTitle>
        <h1>TEAM 06</h1>
      </SidebarTitle>
      <SidebarMenuList>
        {MENU_DATA.map((Menu, index) => {
          return (
            <SidebarMenuLink to={Menu.URL} key={index}>
              {Menu.icon}
              <span>{Menu.title}</span>
            </SidebarMenuLink>
          );
        })}
      </SidebarMenuList>
    </SidebarWrapper>
  );
};

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

const SidebarMenuList = styled.div`
  padding: 16px;
`;

const SidebarMenuLink = styled(Link)`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 40px;
  gap: 8px;
  text-decoration: none;
  color: #ffffff;
  border-radius: 2px;
  cursor: pointer;

  svg {
    font-size: 28px;
  }

  span {
    font-size: 16px;
  }

  &:hover {
    background-color: #a2a2a2;
  }
`;
