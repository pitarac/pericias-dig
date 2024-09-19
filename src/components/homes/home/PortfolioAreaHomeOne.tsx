import Link from 'next/link';
import React from 'react';

const PortfolioAreaHomeOne = () => {
  return (
    <>
      <section className="port_area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span>Projetos Recentes</span>
            <h2>Nossos últimos casos <br />e experiências</h2>
          </div>
          <div className="row">
            {/* Projeto 1 */}
            <div
              className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="single_port">
                <img
                  src="assets/img/portfolio/1.jpg"
                  className="img-fluid"
                  alt="Perícia em Fraude Digital"
                />
                <span>Perícia Digital</span>
                <h4>Investigação de Fraudes Online</h4>
                <Link href="/portfolio">
                  Ver Detalhes <i className="ti-arrow-top-right"></i>
                </Link>
              </div>
            </div>
            {/* Projeto 2 */}
            <div
              className="col-lg-6 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="single_port">
                <img
                  src="assets/img/portfolio/2.jpg"
                  className="img-fluid"
                  alt="Análise Forense Computacional"
                />
                <span>Análise Forense</span>
                <h4>Recuperação de Dados e Evidências</h4>
                <Link href="/portfolio">
                  Ver Detalhes <i className="ti-arrow-top-right"></i>
                </Link>
              </div>
            </div>
            {/* Projeto 3 */}
            <div
              className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="single_port">
                <img
                  src="assets/img/portfolio/3.jpg"
                  className="img-fluid"
                  alt="Perícia em Segurança da Informação"
                />
                <span>Segurança da Informação</span>
                <h4>Avaliação de Vulnerabilidades</h4>
                <Link href="/portfolio">
                  Ver Detalhes <i className="ti-arrow-top-right"></i>
                </Link>
              </div>
            </div>
            {/* Projeto 4 */}
            <div
              className="col-lg-6 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="single_port">
                <img
                  src="assets/img/portfolio/4.jpg"
                  className="img-fluid"
                  alt="Consultoria em Tecnologia"
                />
                <span>Consultoria</span>
                <h4>Implementação de Soluções Tecnológicas</h4>
                <Link href="/portfolio">
                  Ver Detalhes <i className="ti-arrow-top-right"></i>
                </Link>
              </div>
            </div>
            {/* Projeto 5 */}
            <div
              className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="single_port">
                <img
                  src="assets/img/portfolio/5.jpg"
                  className="img-fluid"
                  alt="Perícia em Crimes Cibernéticos"
                />
                <span>Crimes Cibernéticos</span>
                <h4>Investigação de Ataques Hacker</h4>
                <Link href="/portfolio">
                  Ver Detalhes <i className="ti-arrow-top-right"></i>
                </Link>
              </div>
            </div>
            {/* Projeto 6 */}
            <div
              className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="single_port">
                <img
                  src="assets/img/portfolio/6.jpg"
                  className="img-fluid"
                  alt="Treinamento em Segurança Digital"
                />
                <span>Educação</span>
                <h4>Workshops em Segurança Digital</h4>
                <Link href="/portfolio">
                  Ver Detalhes <i className="ti-arrow-top-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioAreaHomeOne;
