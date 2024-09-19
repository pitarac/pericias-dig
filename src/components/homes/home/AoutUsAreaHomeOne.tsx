import React from 'react';

const AboutUsAreaHomeOne = () => {
  return (
    <>
      <section className="ab_one section-padding">
        <div className="container">
          <div className="row">
            {/* Imagem do lado esquerdo */}
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="ab_img">
                <img
                  src="assets/img/about2.png"
                  className="img-fluid"
                  alt="Imagem sobre nós"
                />
              </div>
            </div>
            {/* Conteúdo do lado direito */}
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset="0"
            >
              <div className="ab_content">
                <span>Confie em nossos serviços tecnológicos</span>
                <h2>
                  Especialistas em Perícias Tecnológicas disponíveis 24/7 para solucionar seus problemas.
                </h2>
              </div>
              <div className="abmv">
                <h4>
                  <img src="assets/img/check.png" alt="" /> Serviços de Perícia Tecnológica
                </h4>
                <p>
                  Oferecemos análises técnicas detalhadas para auxiliar em casos que envolvem tecnologia e informática.
                </p>
              </div>
              <div className="abmv">
                <h4>
                  <img src="assets/img/check.png" alt="" /> Certificação Profissional
                </h4>
                <p>
                  Nossa equipe é certificada e possui vasta experiência em perícias na área de tecnologia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsAreaHomeOne;
