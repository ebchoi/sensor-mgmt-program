import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdSensors } from 'react-icons/md';
import { RiUmbrellaFill } from 'react-icons/ri';
import { deviceSizes, device } from '../../styles/Theme';

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
      URL: '/weather_info',
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
  box-sizing: border-box;
  position: sticky;
  top: 0;
  width: 100vw;
  min-width: ${deviceSizes.mobile};
  height: 64px;
  display: flex;
  justify-content: space-between;
  background-color: #2e2e2e;

  ${device.desktop} {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    min-width: 228px;
    width: 228px;
    height: 100vh;
    z-index: 20;
  }
`;

const SidebarTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  max-width: ${deviceSizes.mobile};
  height: 64px;
  padding: 16px;
  ${device.desktop} {
    border-bottom: 2px solid #e2e2e2;
  }

  h1 {
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
  }
`;

const SidebarMenuList = styled.div`
  display: flex;
  align-items: center;
  ${device.desktop} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SidebarMenuLink = styled(Link)`
  padding: 16px;
  min-width: fit-content;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: #ffffff;
  /* border-radius: 2px;0 */
  cursor: pointer;

  svg {
    font-size: 45px;
  }

  span {
    display: none;
    font-size: 16px;
  }

  &:hover {
    background-color: #a2a2a2;
  }

  ${device.desktop} {
    svg {
      font-size: 28px;
    }
    span {
      display: block;
    }
  }
`;
