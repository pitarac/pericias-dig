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
                <span>Confie em nossos serviços de perícia judicial</span>
                <h2>
                  Especialistas em Perícias Judiciais Tecnológicas prontos para resolver suas demandas.
                </h2>
              </div>
              <div className="abmv">
                <h4>
                  <img src="assets/img/check.png" alt="" /> Análises Forenses Tecnológicas
                </h4>
                <p>
                  Realizamos investigações detalhadas e análises técnicas que suportam casos judiciais envolvendo tecnologia e informática.
                </p>
              </div>
              <div className="abmv">
                <h4>
                  <img src="assets/img/check.png" alt="" /> Equipe Certificada e Experiente
                </h4>
                <p>
                  Nossos profissionais são altamente qualificados, com certificações relevantes e ampla experiência em perícias judiciais na área de tecnologia.
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
