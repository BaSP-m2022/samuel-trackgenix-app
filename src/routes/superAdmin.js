import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from 'routes/privateRoute';

const Superadmin = () => {
  return (
    <Switch>
      <PrivateRoute path="/superadmin" component={Superadmin} />
    </Switch>
  );
};

export default Superadmin;
