import { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { BsHouseDoorFill } from 'react-icons/bs';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

export const Breadcrumbs = () => {
  const location = useLocation();

  const [headerTitle, setHeaderTitle] = useState([]);

  const capitalizer = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const makeHeaderTitle = headerTitle => {
    if (headerTitle[0] === '') {
      headerTitle[0] = 'Sensor List';
    }

    return headerTitle.map((item, index) => {
      return (
        <Fragment key={index}>
          <MdOutlineArrowForwardIos className="text-blue-center_border mx-2" />
          <span>{`${capitalizer(item)}`}</span>
        </Fragment>
      );
    });
  };

  useEffect(() => {
    let headerArray = location.pathname.split('/');
    headerArray.shift();
    setHeaderTitle(headerArray);
  }, [location]);

  return (
    <BreadcrumbsWrapper>
      <HouseIcon />
      {makeHeaderTitle(headerTitle)}
    </BreadcrumbsWrapper>
  );
};

const BreadcrumbsWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 10;
  width: 100%;
  height: 64px;
  padding: 0 28px;
  gap: 8px;
  background-color: #ffffff;
  border-bottom: 2px solid #e2e2e2;
`;

const HouseIcon = styled(BsHouseDoorFill)`
  font-size: 24px;
  color: #2e2e2e;
`;
