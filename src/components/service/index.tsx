

import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import ServiceArea from './ServiceArea';
import FooterOne from '@/layouts/footers/FooterOne';

const Service = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Serviços" subtitle="Serviços" />
      <ServiceArea />
      <FooterOne />
    </>
  );
};

export default Service;