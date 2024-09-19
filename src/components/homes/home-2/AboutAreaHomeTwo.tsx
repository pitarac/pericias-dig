import Link from 'next/link';
import React from 'react';

const AboutAreaHomeTwo = () => {
  return (
    <>
      <section className="ab_one section-padding">
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
                <span>Sobre Nós</span>
                <h2>
                  Nossa equipe de especialistas oferece serviços de perícia tecnológica 24 horas por dia, 7 dias por semana.
                </h2>
              </div>
              <div className="abmv_list">
                <ul>
                  <li>
                    <img src="assets/img/check.png" alt="" /> Análises técnicas detalhadas em sistemas e dispositivos.
                  </li>
                  <li>
                    <img src="assets/img/check.png" alt="" /> Consultoria especializada em tecnologia da informação.
                  </li>
                  <li>
                    <img src="assets/img/check.png" alt="" /> Elaboração de laudos periciais para processos judiciais.
                  </li>
                  <li>
                    <img src="assets/img/check.png" alt="" /> Recuperação e análise de dados digitais.
                  </li>
                </ul>
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
            {/* Imagem e texto do lado direito */}
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="ab_img ai_top">
                <p>
                  Maximize o valor dos seus casos com nossas perícias tecnológicas sob demanda, garantindo transparência e resultados confiáveis.
                </p>
                <img
                  src="assets/img/about3.png"
                  className="img-fluid"
                  alt="Perícia Tecnológica"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAreaHomeTwo;
