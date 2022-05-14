import React from 'react';
import { Redirect } from 'react-router-dom'

import './index.less';

const Data = () => {
  return (
    <Redirect to="/data/mood" />
  );
};

export default Data;
