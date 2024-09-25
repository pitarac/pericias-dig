import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import ServiceDetailsArea from './ServiceDetailsArea';
import FooterOne from '@/layouts/footers/FooterOne';

// Exemplo de definição de serviceData
const serviceData = {
  image: 'caminho/para/a/imagem.jpg', // caminho correto da imagem
  title: 'Título do Serviço',
  description: 'Descrição detalhada do serviço.',
};

const ServiceDetails = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Service Details" subtitle="Service Details" />
      {/* Passando a propriedade service ao ServiceDetailsArea */}
      <ServiceDetailsArea service={serviceData} />
      <FooterOne />
    </>
  );
};

export default ServiceDetails;
