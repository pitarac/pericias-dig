import PrivacyPolicy from '@/components/Politica/index';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Pericias Digitais  Política de Privacidade ",
};



const politica = () => {
  return (
    <Wrapper>
      <PrivacyPolicy />
    </Wrapper>
  );
};

export default politica;