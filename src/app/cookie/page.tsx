import CookiePolicy from '@/components/Politica/CookiePolicy';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Pericias Digitais  Política de Cookie ",
};



const politica = () => {
  return (
    <Wrapper>
      <CookiePolicy />
    </Wrapper>
  );
};

export default politica;