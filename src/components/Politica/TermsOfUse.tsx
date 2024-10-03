import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';

const TermsOfUse = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Termos de Uso" subtitle="Termos de Uso" />
      <div className="terms-of-use">
        <h1>Termos de Uso</h1>

        <h2>1. Aceitação dos Termos</h2>
        <p>
          Bem-vindo ao <strong>Perícia Digital</strong>. Ao acessar e usar nosso site, você concorda em cumprir e estar legalmente vinculado aos seguintes Termos de Uso. Se você não concordar com qualquer parte destes termos, solicitamos que não utilize nosso site.
        </p>

        <h2>2. Modificações nos Termos</h2>
        <p>
          A <strong>Perícia Digital</strong> reserva-se o direito de modificar ou atualizar estes Termos de Uso a qualquer momento, sem aviso prévio. É sua responsabilidade revisar os termos regularmente para se manter informado sobre possíveis alterações. O uso contínuo do site após as modificações implica na aceitação das mudanças.
        </p>

        <h2>3. Descrição dos Serviços</h2>
        <p>
          A <strong>Perícia Digital</strong> oferece uma plataforma online que fornece serviços de <strong>perícias digitais</strong> no âmbito de tecnologia e segurança cibernética. Esses serviços incluem análises, consultorias e laudos técnicos relacionados a incidentes e investigações digitais.
        </p>

        <h2>4. Regras de Conduta</h2>
        <p>Ao utilizar nosso site, você concorda em não:</p>
        <ul>
          <li>Utilizar o site para fins ilegais ou não autorizados.</li>
          <li>Fazer uso indevido dos serviços, incluindo, mas não se limitando a, invasões, fraudes ou tentativas de comprometer a segurança do site.</li>
          <li>Enviar ou transmitir qualquer conteúdo ofensivo, abusivo, difamatório, discriminatório ou ilegal.</li>
          <li>Interferir ou interromper o funcionamento do site ou dos servidores e redes conectadas ao site.</li>
        </ul>

        <h2>5. Propriedade Intelectual</h2>
        <p>
          Todo o conteúdo do site <strong>Perícia Digital</strong>, incluindo textos, gráficos, logotipos, ícones, imagens, vídeos e software, é protegido por direitos autorais, marcas registradas e outras leis de propriedade intelectual. Você não está autorizado a reproduzir, distribuir, modificar ou criar obras derivadas sem a autorização expressa da <strong>Perícia Digital</strong>.
        </p>

        <h2>6. Limitação de Responsabilidade</h2>
        <p>
          Os serviços fornecidos pela <strong>Perícia Digital</strong> são oferecidos "como estão", sem garantias de qualquer tipo, expressas ou implícitas. A <strong>Perícia Digital</strong> não será responsável por qualquer dano direto, indireto, incidental, especial ou consequente resultante do uso ou da incapacidade de usar o site ou os serviços.
        </p>

        <h2>7. Privacidade</h2>
        <p>
          Sua privacidade é importante para nós. Ao utilizar o site, você concorda com os termos descritos em nossa <a href="/politica-de-privacidade">Política de Privacidade</a>, que explica como coletamos, usamos e protegemos suas informações.
        </p>

        <h2>8. Links para Terceiros</h2>
        <p>
          Nosso site pode conter links para sites de terceiros que não são controlados pela <strong>Perícia Digital</strong>. Não somos responsáveis pelo conteúdo, políticas de privacidade ou práticas de qualquer site de terceiros. Recomendamos que você leia os termos de uso e políticas de privacidade de quaisquer sites de terceiros que visitar.
        </p>

        <h2>9. Cancelamento de Conta</h2>
        <p>
          A <strong>Perícia Digital</strong> reserva-se o direito de suspender ou encerrar o acesso ao site e aos serviços a qualquer momento, sem aviso prévio, se você violar estes Termos de Uso ou quaisquer políticas aplicáveis.
        </p>

        <h2>10. Legislação Aplicável</h2>
        <p>
          Estes Termos de Uso são regidos pelas leis da <strong>República Federativa do Brasil</strong>. Quaisquer disputas ou controvérsias decorrentes da utilização do site ou dos serviços serão resolvidas nos tribunais competentes do Brasil.
        </p>

        <h2>11. Contato</h2>
        <p>
          Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco em <a href="mailto:infor@periciadigital.tec.br">infor@periciadigital.tec.br</a>.
        </p>
      </div>

      <FooterOne />
    </>
  );
};

export default TermsOfUse;
