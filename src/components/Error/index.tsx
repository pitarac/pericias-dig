import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import Link from 'next/link';

const Error = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="404" subtitle="404" />
      <section className="zero_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
              <div className="error_page">
                <img src="assets/img/404.svg" className="img-fluid" alt="Página não encontrada" />
                <h2>Oops! Página não encontrada</h2>
                <p>Hmm. Estamos tendo problemas para encontrar esse site. Tente novamente mais tarde ou verifique sua conexão de rede.</p>
                <div className="home_btn">
                  <Link href="/" className="btn_one">Voltar para a Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterOne />
    </>
  );
};

export default Error;
