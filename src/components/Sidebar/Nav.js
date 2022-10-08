import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdSensors } from 'react-icons/md';
import { RiUmbrellaFill } from 'react-icons/ri';

export const Nav = () => {
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
  );
};

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
