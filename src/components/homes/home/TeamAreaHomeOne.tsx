import React from 'react';

const TeamAreaHomeOne = () => {
  return (
    <>
      <section className="team_area section-padding">
        <div className="container">
          <div className="row">
            {/* Texto de introdução */}
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="section-title">
                <span>Nossa Equipe</span>
                <h2>Nossa equipe de especialistas para a sua solução</h2>
                <p>
                  Contamos com profissionais altamente qualificados em perícias na área de tecnologia, prontos para oferecer análises precisas e confiáveis para o seu caso.
                </p>
                <a href="#" className="btn_one">
                  Ver todos os membros <i className="ti-arrow-top-right"></i>
                </a>
              </div>
            </div>
            {/* Membros da equipe */}
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="row">
                <div
                  className="col-lg-6 col-sm-6 col-xs-12 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                  data-wow-offset="0"
                >
                  <div className="single_team">
                    <img
                      src="assets/img/team/team1.jpg"
                      className="img-fluid"
                      alt="Paulo Leocádia"
                    />
                    <h4>Paulo Leocádia</h4>
                    <p>Perito Tecnológico</p>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-sm-6 col-xs-12 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                  data-wow-offset="0"
                >
                  <div className="single_team">
                    <img
                      src="assets/img/team/team2.jpg"
                      className="img-fluid"
                      alt="Maria Silva"
                    />
                    <h4>Maria Silva</h4>
                    <p>Analista Forense</p>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-sm-6 col-xs-12 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                  data-wow-offset="0"
                >
                  <div className="single_team">
                    <img
                      src="assets/img/team/team3.jpg"
                      className="img-fluid"
                      alt="João Santos"
                    />
                    <h4>João Santos</h4>
                    <p>Especialista em Segurança</p>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-sm-6 col-xs-12 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                  data-wow-offset="0"
                >
                  <div className="single_team">
                    <img
                      src="assets/img/team/team4.jpg"
                      className="img-fluid"
                      alt="Ana Pereira"
                    />
                    <h4>Ana Pereira</h4>
                    <p>Consultora Tecnológica</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamAreaHomeOne;
