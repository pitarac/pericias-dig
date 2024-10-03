import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';

const PrivacyPolicy = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Política de Privacidade" subtitle="Política de Privacidade" />
      <div className="privacy-policy">
        <h1>Política de Privacidade</h1>

        <p>
          Na <strong>Perícia Digital</strong>, a sua privacidade é uma prioridade. Esta Política de Privacidade explica como coletamos, utilizamos, armazenamos e protegemos as suas informações pessoais ao utilizar nosso site e serviços.
        </p>

        <h2>1. Informações que Coletamos</h2>
        <p>
          Coletamos diferentes tipos de informações, incluindo:
        </p>
        <ul>
          <li>
            <strong>Informações Pessoais:</strong> Nome, endereço de e-mail, número de telefone e outras informações que você nos fornece diretamente.
          </li>
          <li>
            <strong>Informações de Navegação:</strong> Dados sobre como você utiliza nosso site, como páginas acessadas, duração da visita e interações com o conteúdo.
          </li>
          <li>
            <strong>Informações de Dispositivo:</strong> Coletamos automaticamente informações técnicas sobre o dispositivo que você utiliza para acessar o nosso site, como tipo de dispositivo, sistema operacional e navegador.
          </li>
        </ul>

        <h2>2. Como Utilizamos Suas Informações</h2>
        <p>
          As informações que coletamos são utilizadas para:
        </p>
        <ul>
          <li>Fornecer e personalizar os serviços oferecidos pela <strong>Perícia Digital</strong>.</li>
          <li>Melhorar a sua experiência de navegação em nosso site.</li>
          <li>Enviar atualizações, promoções e outras comunicações relacionadas aos nossos serviços.</li>
          <li>Cumprir com obrigações legais e regulatórias.</li>
        </ul>

        <h2>3. Compartilhamento de Informações</h2>
        <p>
          Não vendemos, trocamos ou alugamos suas informações pessoais. Podemos compartilhar suas informações com terceiros apenas nas seguintes situações:
        </p>
        <ul>
          <li>
            <strong>Prestadores de Serviços:</strong> Compartilhamos informações com empresas que nos auxiliam a operar o site e fornecer os serviços, desde que cumpram nossas políticas de privacidade.
          </li>
          <li>
            <strong>Obrigação Legal:</strong> Podemos divulgar suas informações se exigido por lei ou em resposta a um processo legal válido.
          </li>
        </ul>

        <h2>4. Segurança</h2>
        <p>
          Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso, alteração, divulgação ou destruição não autorizada.
        </p>

        <h2>5. Seus Direitos</h2>
        <p>
          Você tem o direito de acessar, corrigir ou solicitar a exclusão de suas informações pessoais. Para exercer esses direitos, entre em contato conosco através do e-mail <a href="mailto:infor@periciadigital.tec.br">infor@periciadigital.tec.br</a>.
        </p>

        <h2>6. Alterações na Política de Privacidade</h2>
        <p>
          Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas. Recomendamos que você consulte esta página regularmente para se manter informado sobre como protegemos suas informações.
        </p>

        <h2>7. Contato</h2>
        <p>
          Se você tiver dúvidas ou preocupações sobre nossa Política de Privacidade, entre em contato conosco pelo e-mail <a href="mailto:infor@periciadigital.tec.br">infor@periciadigital.tec.br</a>.
        </p>
      </div>

      <FooterOne />
    </>
  );
};

export default PrivacyPolicy;
