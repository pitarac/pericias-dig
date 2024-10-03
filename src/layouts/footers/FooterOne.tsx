

import Link from 'next/link';
import React from 'react';

const FooterOne = () => {
  return (
    <>
      <div className="footer section-padding"
        style={{ backgroundImage: `url(assets/img/bg/section-2.jpg)`, backgroundSize: "cover", backgroundPosition: "center center" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_footer">
                <Link href="/"><img src="assets/img/logo.png" alt="image-here" /></Link>
                <p>Compromisso com a verdade e o conhecimento.</p>
                <div className="social_profile">
                  <ul>
                   
                    <li><a href="https://www.instagram.com/paulo.web3/" className="f_instagram"><i className="ti-instagram" title="Instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/pauloleocadia/" className="f_linkedin"><i className="ti-linkedin" title="LinkedIn"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_footer">
                <h4>Conheça</h4>
                <ul>
                  <li><a href="/about">Sobre</a></li>
                  <li><a href="/blog">Blog & Artigos</a></li>
                  <li><a href="/blog-details">Estudo de casos</a></li>
                  <li><a href="/faq">Perguntas frequentes</a></li>
                  <li><a href="/contact">Fale conosco</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_footer">
                <h4>Outros serviços</h4>
              <ul>
                <li><a href="#">Perícia em sistemas de informação</a></li>
                <li><a href="#">Análise forense de dispositivos</a></li>
                <li><a href="#">Investigação de fraudes digitais</a></li>
                <li><a href="#">Avaliação de conformidade tecnológica</a></li>
                <li><a href="#">Inspeção de códigos e software</a></li>
                <li><a href="#">Recuperação de dados</a></li>
              </ul>
              </div>
            </div>
            
          </div>
          <div className="row fc">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="footer_copyright">
                <p>&copy; {new Date().getFullYear()}. Todos os direitos são reservados</p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="footer_menu">
                <ul>
                  <li><a href="/termos-de-uso">Termos de uso</a></li>
                  <li><a href="/politica-de-privacidade">Política de Privacidade</a></li>
                  <li><a href="/cookie">Política de Cookies</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterOne;