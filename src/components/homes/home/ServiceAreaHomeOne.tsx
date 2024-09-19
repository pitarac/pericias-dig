'use client'

import Link from 'next/link';
import Slider from 'react-slick';

// Configurações do slider
const slider_setting = {
  speed: 4000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  pauseOnFocus: false,
  pauseOnHover: true,
};

// Dados do slider adaptados para perícias judiciais
const slider_data = [
  "Análises Técnicas",
  "Laudos Periciais",
  "Consultoria Especializada",
  "Assistência Técnica Judicial",
  "Perícias em Tecnologia",
  "Provas Digitais",
  "Pareceres Técnicos",
  "Avaliações Imparciais",
  "Perícias Contábeis",
  "Perícias Trabalhistas",
];

const ServiceAreaHomeOne = () => {
  return (
    <>
      <section className="service_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="section-title">
                <span>Nossos Serviços</span>
                <h2>O que fazemos por você <br />Soluções em Perícias Judiciais</h2>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="ser_btn">
                <Link href="/service" className="btn_two">
                  Ver todos os serviços <i className="ti-arrow-top-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="single_service">
                <img
                  src="assets/img/service1.png"
                  className="img-fluid"
                  alt="Perícias Digitais"
                />
                <h2>Perícias Digitais</h2>
                <p>
                  Realizamos análises técnicas em dispositivos eletrônicos para obtenção de provas digitais.
                </p>
                <Link href="/service">
                  Leia Mais <i className="ti-arrow-top-right"></i>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="single_service">
                <img
                  src="assets/img/service2.png"
                  className="img-fluid"
                  alt="Assistência Técnica Judicial"
                />
                <h2>Assistência Técnica Judicial</h2>
                <p>
                  Fornecemos suporte técnico em processos judiciais, auxiliando advogados e magistrados.
                </p>
                <Link href="/service">
                  Leia Mais <i className="ti-arrow-top-right"></i>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="single_service">
                <img
                  src="assets/img/service3.png"
                  className="img-fluid"
                  alt="Consultoria Pericial"
                />
                <h2>Consultoria Pericial</h2>
                <p>
                  Oferecemos consultoria especializada para esclarecimento de questões técnicas em litígios.
                </p>
                <Link href="/service">
                  Leia Mais <i className="ti-arrow-top-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marq_text">
        <div id="supermarquee1">
          <Slider
            {...slider_setting}
            className="swiper-container tp-text-slider-4-active"
          >
            {slider_data.map((item, i) => (
              <div key={i} className="me-4">
                {item}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ServiceAreaHomeOne;
