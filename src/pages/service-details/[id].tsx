// components/service-details/[id].tsx
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../../components/common/Breadcrumb';
import ServiceDetailsArea from '../../components/service-details/ServiceDetailsArea';
import FooterOne from '@/layouts/footers/FooterOne';
import servicesData from '../../data/services.json'; // ajuste o caminho

const ServiceDetails = ({ serviceData }) => {
  if (!serviceData) {
    return <div>Service not found</div>; // ou redirecionar para uma página 404
  }

  return (
    <>
      <HeaderOne />
      <Breadcrumb title={serviceData.title} subtitle="Service Details" />
      <ServiceDetailsArea service={serviceData} />
      <FooterOne />
    </>
  );
};

export async function getStaticPaths() {
  const paths = servicesData.map(service => ({
    params: { id: service.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const serviceData = servicesData.find(service => service.id.toString() === params.id);

  if (!serviceData) {
    return { notFound: true };
  }

  return {
    props: { serviceData },
  };
}

export default ServiceDetails;
