import React from 'react';

const AboutAreaHomeOne = () => {
  return (
    <>
      <section className="ab_one section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="ab_img">
                <img
                  src="assets/img/about1.png"
                  className="img-fluid"
                  alt="Imagem sobre nós"
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset="0"
            >
              <div className="ab_content">
                <span>Sobre a Empresa</span>
                <h2>
                  Especialistas em Perícias Judiciais para Soluções Técnicas e Precisas
                </h2>
              </div>
              <div className="abmv">
                <h4>
                  <img src="assets/img/check.png" alt="" /> Análises Técnicas Detalhadas
                </h4>
                <p>
                  Oferecemos análises minuciosas para auxiliar na resolução de casos judiciais complexos.
                </p>
              </div>
              <div className="abmv">
                <h4>
                  <img src="assets/img/check.png" alt="" /> Consultoria Especializada
                </h4>
                <p>
                  Nossa equipe de peritos certificados está pronta para fornecer consultoria especializada em diversas áreas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAreaHomeOne;
