import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <Fragment>
      <div>Sidebar</div>
      <Outlet />
    </Fragment>
  );
};
