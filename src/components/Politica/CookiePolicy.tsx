import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';

const CookiePolicy = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Política de Cookies" subtitle="Política de Cookies" />
      <div className="content-area">
        <div className="container">
          <h1>Política de Cookies</h1>
          <p>
            A Perícia Digital, como muitos outros sites, utiliza cookies para melhorar a experiência de navegação e personalizar o conteúdo. 
            Esta política de cookies explica o que são cookies e como os utilizamos no site <a href="https://periciadigital.tec.br/">https://periciadigital.tec.br/</a>.
          </p>
          <h2>O Que São Cookies?</h2>
          <p>
            Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo quando você visita um site. 
            Eles permitem que o site reconheça seu dispositivo em visitas futuras, melhorando sua experiência.
          </p>
          <h2>Como Utilizamos os Cookies?</h2>
          <p>
            Utilizamos cookies para várias finalidades, como lembrar suas preferências de navegação, personalizar o conteúdo 
            e analisar o desempenho do site.
          </p>
          <h2>Gerenciar Cookies</h2>
          <p>
            Você pode optar por aceitar ou recusar cookies nas configurações do seu navegador. 
            No entanto, a desativação de cookies pode afetar a funcionalidade de algumas partes do nosso site.
          </p>
          {/* Adicione mais informações conforme necessário */}
        </div>
      </div>
      <FooterOne />
    </>
  );
};

export default CookiePolicy;
