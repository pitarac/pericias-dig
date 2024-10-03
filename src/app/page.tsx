
import HomeOne from '@/components/homes/home';
import Wrapper from '@/layouts/Wrapper';
import LGPD from '@/components/LGPD/index'
import React from 'react';

export const metadata = {
  title: "Pericias na área de Tecnologia",
};

const index = () => {
  return (
    <Wrapper>
      <HomeOne />
      <LGPD />
    </Wrapper>
  );
};

export default index;