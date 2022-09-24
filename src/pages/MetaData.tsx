import React from 'react';
import Helmet from 'react-helmet';

type Title = {
  title: string;
};
const MetaData = ({ title }: Title) => {
  return <Helmet>{title}</Helmet>;
};

export default MetaData;
