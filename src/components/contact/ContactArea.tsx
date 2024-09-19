'use client'

import React from 'react';

const ContactArea = () => {
  return (
    <>
      <section className="address_area section-padding">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-4 col-sm-4 col-xs-12 mt-5 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
              <div className="single_address">
                <i className="ti-map"></i>
                <h4>Nossa Localização</h4>
                <p>3481 Melrose Place, Beverly Hills <br /> CA 90210</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-xs-12 mt-5 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_address sabr">
                <i className="ti-mobile"></i>
                <h4>Telefone</h4>
                <p>(+1) 517 397 7100</p>
                <p>(+1) 411 315 8138</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-xs-12 mt-5 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
              <div className="single_address">
                <i className="ti-email"></i>
                <h4>Envie um e-mail</h4>
                <p>info@exemplo.com</p>
                <p>admin@exemplo.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="contact" className="contact_area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span>Entre em contato</span>
            <h2>Contate-nos para qualquer dúvida ou solicitação</h2>
          </div>
          <div className="row">
            <div className="offset-lg-1 col-lg-10 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="contact">
                <form className="form" name="enq" onClick={e => e.preventDefault()}>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="">Nome</label>
                      <input type="text" name="name" className="form-control" required />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="">Seu E-mail</label>
                      <input type="email" name="email" className="form-control" required />
                    </div>
                    <div className="form-group col-md-12">
                      <label htmlFor="">Assunto</label>
                      <input type="text" name="subject" className="form-control" required />
                    </div>
                    <div className="form-group col-md-12">
                      <label htmlFor="">Mensagem</label>
                      <textarea rows={6} name="message" className="form-control" required></textarea>
                    </div>
                    <div className="col-md-12 text-center">
                      <button type="submit" value="Enviar mensagem" name="submit" id="submitButton" className="btn_one" title="Enviar sua mensagem!">Enviar Mensagem</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
