
import Link from 'next/link';
import React from 'react';

const AboutArea = () => {
  return (
    <>
      <section className="ab_one section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
              <div className="ab_content">
              <span>Conheça Nosso Trabalho</span>
                <h2>Perícias Judiciais e Pareceres Técnicos em Tecnologia</h2>
                </div>
                <div className="abmv_list">
                  <ul>
                    <li><img src="assets/img/check.png" alt="" /> Análise detalhada de evidências digitais em processos judiciais.</li>
                    <li><img src="assets/img/check.png" alt="" /> Elaboração de parecer técnico especializado para disputas tecnológicas.</li>
                    <li><img src="assets/img/check.png" alt="" /> Avaliação de sistemas e segurança cibernética em investigações.</li>
                    <li><img src="assets/img/check.png" alt="" /> Identificação e mitigação de riscos digitais em perícias judiciais.</li>
                  </ul>
                </div>

              <div className="skill_btn">
                <Link href="/contact" className="btn_one">Agende uma conversa <i className="ti-arrow-top-right"></i></Link>
                <a href="#" className="btn_two">Converse agora<i className="ti-arrow-top-right"></i></a>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="ab_img ai_top">
              <p>Garantimos precisão técnica e imparcialidade, fornecendo soluções claras para decisões jurídicas embasadas.</p>

                <img src="assets/img/about3.png" className="img-fluid" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;