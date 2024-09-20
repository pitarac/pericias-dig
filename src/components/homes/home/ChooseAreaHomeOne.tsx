import Link from 'next/link';
import React from 'react';

const ChooseAreaHomeOne = () => {
  return (
    <>
      <section
        className="why_area section-padding"
        style={{
          backgroundImage: `url(assets/img/bg/section-2.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="container">
          <div className="row">
            {/* Conteúdo do lado esquerdo */}
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset="0"
            >
              <div className="ab_content">
                <span>Por que nos escolher</span>
                <h2>
                  Especialistas em Perícias Tecnológicas para atender à crescente demanda do mercado.
                </h2>
                <p>
                  Oferecemos serviços de perícias tecnológicas com alto nível de expertise para auxiliar em processos judiciais e extrajudiciais. Nossa equipe é composta por profissionais qualificados, prontos para fornecer soluções precisas e confiáveis.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-4 col-sm-4 col-xs-12 no-padding">
                  <div className="single-project2">
                    <h2 className="counter-num">100%</h2>
                    <h4>Precisão Técnica</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-12 no-padding">
                  <div className="single-project2">
                    <h2 className="counter-num">100%</h2>
                    <h4>Transparência</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-12 no-padding">
                  <div className="single-project2">
                    <h2 className="counter-num">100%</h2>
                    <h4>Comprometimento</h4>
                  </div>
                </div>
                <div className="skill_btn">
                  <Link href="/service" className="btn_one">
                    Conheça nossos serviços <i className="ti-arrow-top-right"></i>
                  </Link>
                  <Link href="/contact" className="btn_two">
                    Entre em contato <i className="ti-arrow-top-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* Imagem do lado direito */}
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="sk_img">
                <img
                  src="assets/img/computer.png"
                  className="img-fluid"
                  alt="Imagem ilustrativa"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseAreaHomeOne;
