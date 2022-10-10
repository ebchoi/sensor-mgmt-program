import { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { BsHouseDoorFill } from 'react-icons/bs';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { device } from '../../styles/Theme';

export const Breadcrumbs = () => {
  const location = useLocation();

  const [headerTitle, setHeaderTitle] = useState();

  const capitalizer = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const makeHeaderTitle = headerTitle => {
    let headerValue = headerTitle.replace('_', ' ').slice(1);

    if (headerValue === '') {
      headerValue = 'Sensor list';
    }

    return (
      <Fragment>
        <MdOutlineArrowForwardIos className="text-blue-center_border mx-2" />
        <span>{`${capitalizer(headerValue)}`}</span>
      </Fragment>
    );
  };

  useEffect(() => {
    let headerValue = location.pathname;
    setHeaderTitle(headerValue);
  }, [location]);

  return (
    <BreadcrumbsWrapper>
      <HouseIcon />
      {headerTitle && makeHeaderTitle(headerTitle)}
    </BreadcrumbsWrapper>
  );
};

const BreadcrumbsWrapper = styled.div`
  box-sizing: border-box;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  z-index: 10;
  width: 100%;
  height: 64px;
  padding: 0 28px;
  gap: 8px;
  background-color: #ffffff;
  border-bottom: 2px solid #e2e2e2;

  ${device.desktop} {
    position: fixed;
  } ;
`;

const HouseIcon = styled(BsHouseDoorFill)`
  font-size: 24px;
  color: #2e2e2e;
`;
