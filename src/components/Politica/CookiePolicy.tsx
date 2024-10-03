import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';

const CookiePolicy = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Política de Cookies" subtitle="Política de Cookies" />
      <div className="cookie-policy">
  <h1>Política de Cookies</h1>

  <p>
    Na <strong>Perícia Digital</strong>, utilizamos cookies para melhorar sua experiência de navegação, fornecer funcionalidades personalizadas e exibir anúncios relevantes de acordo com seus interesses.
  </p>

  <h2>O que são Cookies?</h2>
  <p>
    Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, smartphone, tablet, etc.) quando você acessa um site. Eles permitem que o site reconheça o seu dispositivo em futuras visitas, proporcionando uma experiência de navegação personalizada e eficiente.
  </p>

  <h2>Como Utilizamos Cookies?</h2>
  <p>Utilizamos cookies para as seguintes finalidades:</p>

  <ul>
    <li>
      <strong>Cookies Essenciais:</strong> Necessários para o funcionamento correto do site, permitindo que você navegue e utilize recursos como áreas seguras.
    </li>
    <li>
      <strong>Cookies de Desempenho:</strong> Usados para entender como os visitantes utilizam nosso site, ajudando-nos a melhorar sua experiência.
    </li>
    <li>
      <strong>Cookies de Funcionalidade:</strong> Esses cookies lembram suas preferências, como idioma e região, para oferecer uma experiência personalizada.
    </li>
    <li>
      <strong>Cookies de Marketing:</strong> Utilizados para exibir anúncios que são relevantes para você. Esses cookies ajudam a medir a eficácia das campanhas de marketing e podem ser configurados por nossos parceiros de publicidade.
    </li>
    <li>
      <strong>Cookies de Terceiros:</strong> Trabalhamos com parceiros externos que podem configurar cookies para monitorar suas interações com nosso conteúdo ou exibir anúncios em outras plataformas.
    </li>
  </ul>

  <h2>Gerenciamento de Cookies</h2>
  <p>
    Você pode gerenciar suas preferências de cookies diretamente nas configurações do seu navegador. No entanto, ao desativar cookies, algumas funcionalidades do site podem não funcionar corretamente.
  </p>

  <h2>Alterações nesta Política</h2>
  <p>
    Podemos atualizar esta política de cookies periodicamente para refletir mudanças em nossas práticas. Aconselhamos que você consulte esta página regularmente para se manter informado.
  </p>

  <h2>Contato</h2>
  <p>
    Se você tiver dúvidas sobre nossa política de cookies, entre em contato conosco em <a href="mailto:infor@periciadigital.tec.br">infor@periciadigital.tec.br</a>.
  </p>
</div>

      <FooterOne />
    </>
  );
};

export default CookiePolicy;
