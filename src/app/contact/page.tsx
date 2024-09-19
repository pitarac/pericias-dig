

import Contact from '@/components/contact';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "Contato - Pericias Digitais ",
};


const index = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

export default index;