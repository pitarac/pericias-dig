import Link from 'next/link';
import React from 'react';

const ProjectArea = () => {
  return (
    <>
      <section className="port_area section-padding">
        <div className="container">
          <div className="section-title text-center">
          <span>Últimos Projetos</span>
          <h2>Atuamos em diversas frentes da tecnologia, oferecendo <br />soluções personalizadas em perícias judiciais digitais, segurança cibernética, análise forense e consultoria técnica, <br />sempre alinhados às necessidades específicas de cada cliente e projeto</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_port">
                <img src="assets/img/portfolio/1.jpg" className="img-fluid" alt="image" />
                  <span>Criatividade</span>
                  <h4>Solução Criativa</h4>
                  {/* <Link href="/project-details">Ver Detalhes <i className="ti-arrow-top-right"></i></Link> */}
              </div>
            </div>
            <div className="col-lg-6 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_port">
                <img src="assets/img/portfolio/2.jpg" className="img-fluid" alt="image" />
                  <span>Programação</span>
                  <h4>Programação & IA</h4>
                  {/* <Link href="/project-details">Ver Detalhes <i className="ti-arrow-top-right"></i></Link> */}
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_port">
                <img src="assets/img/portfolio/3.jpg" className="img-fluid" alt="image" />
                  <span>Cibersegurança</span>
                  <h4>Segurança Computacional</h4>
                  {/* <Link href="/project-details">Ver Detalhes <i className="ti-arrow-top-right"></i></Link> */}
              </div>
            </div>
            <div className="col-lg-6 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_port">
                <img src="assets/img/portfolio/4.jpg" className="img-fluid" alt="image" />
                  <span>Solução</span>
                  <h4>Projeto Embarcado</h4>
                  {/* <Link href="/project-details">Ver Detalhes <i className="ti-arrow-top-right"></i></Link> */}
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_port">
                <img src="assets/img/portfolio/5.jpg" className="img-fluid" alt="image" />
                  <span>Cibersegurança</span>
                  <h4>Segurança Computacional</h4>
                  {/* <Link href="/project-details">Ver Detalhes <i className="ti-arrow-top-right"></i></Link> */}
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_port">
                <img src="assets/img/portfolio/6.jpg" className="img-fluid" alt="image" />
                  <span>Proteção</span>
                  <h4>Segurança Familiar</h4>
                  {/* <Link href="/project-details">Ver Detalhes <i className="ti-arrow-top-right"></i></Link> */}
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_port">
                <img src="assets/img/portfolio/7.jpg" className="img-fluid" alt="image" />
                  <span>Criatividade</span>
                  <h4>Solução Criativa</h4>
                  {/* <Link href="/project-details">Ver Detalhes <i className="ti-arrow-top-right"></i></Link> */}
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_port">
                <img src="assets/img/portfolio/8.jpg" className="img-fluid" alt="image" />
                  <span>Programação</span>
                  <h4>Programação & IA</h4>
                  {/* <Link href="/project-details">Ver Detalhes <i className="ti-arrow-top-right"></i></Link> */}
              </div>
            </div>
            <div className="col-lg-6 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_port">
                <img src="assets/img/portfolio/9.jpg" className="img-fluid" alt="image" />
                  <span>Cibersegurança</span>
                  <h4>Segurança Computacional</h4>
                  {/* <Link href="/project-details">Ver Detalhes <i className="ti-arrow-top-right"></i></Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectArea;
