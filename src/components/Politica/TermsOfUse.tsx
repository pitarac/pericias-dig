import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';

const TermsOfUse = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Termos de Uso" subtitle="Termos de Uso" />
      <div className="content-area">
        <div className="container">
          <h1>Termos de Uso</h1>
          <p>
            Bem-vindo à Perícia Digital! Ao acessar o site <a href="https://periciadigital.tec.br/">https://periciadigital.tec.br/</a>, 
            você concorda em cumprir os seguintes termos e condições. Se você não concorda com qualquer parte destes termos, 
            por favor, não utilize nosso site.
          </p>
          <h2>Uso do Site</h2>
          <p>
            Você concorda em usar o site apenas para fins legais e de uma maneira que não infrinja os direitos de terceiros, 
            nem restrinja ou impeça o uso e o aproveitamento do site por qualquer outra pessoa.
          </p>
          <h2>Modificações nos Termos</h2>
          <p>
            A Perícia Digital reserva-se o direito de modificar estes termos a qualquer momento. 
            As mudanças entrarão em vigor imediatamente após sua publicação no site.
          </p>
          {/* Adicione mais seções e detalhes conforme necessário */}
        </div>
      </div>
      <FooterOne />
    </>
  );
};

export default TermsOfUse;
