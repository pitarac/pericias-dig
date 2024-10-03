import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';

const PrivacyPolicy = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Política de Privacidade" subtitle="Política de Privacidade" />
      <div className="content-area">
        <div className="container">
          <h1>Política de Privacidade</h1>
          <p>
            Na Perícia Digital, disponível em <a href="https://periciadigital.tec.br/">https://periciadigital.tec.br/</a>, 
            uma de nossas principais prioridades é a privacidade dos nossos visitantes. Este documento de Política de Privacidade 
            contém os tipos de informações que são coletadas e registradas pela Perícia Digital e como as utilizamos.
          </p>
          <h2>Informações que Coletamos</h2>
          <p>
            As informações pessoais que solicitamos e as razões pelas quais são solicitadas serão esclarecidas no momento da solicitação.
            Caso entre em contato diretamente, poderemos receber informações adicionais sobre você, como nome, e-mail, número de telefone, etc.
          </p>
          <h2>Como Utilizamos Suas Informações</h2>
          <p>
            Utilizamos as informações que coletamos para diversas finalidades, incluindo:
          </p>
          <ul>
            <li>Fornecer, operar e manter nosso site;</li>
            <li>Entender e analisar como você usa o nosso site;</li>
            <li>Melhorar nossos serviços e funcionalidades;</li>
            <li>Comunicar com você diretamente, inclusive por e-mail;</li>
            <li>Prevenir fraudes.</li>
          </ul>
          {/* Adicione mais informações conforme necessário */}
        </div>
      </div>
      <FooterOne />
    </>
  );
};

export default PrivacyPolicy;
