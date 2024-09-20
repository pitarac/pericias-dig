'use client';

import React, { useState } from 'react';

const ContactArea = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Erro ao enviar a mensagem');

      const data = await response.json();
      setMensagem(data.message || 'Mensagem enviada com sucesso!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      }); // Limpa os campos após o envio
    } catch (error) {
      console.error('Erro:', error);
      setMensagem('Erro ao enviar a mensagem. Tente novamente.');
    }
  };

  return (
    <>
      <section className="address_area section-padding">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-4 col-sm-4 col-xs-12 mt-5">
              <div className="single_address">
                <i className="ti-map"></i>
                <h4>Nossa Localização</h4>
                <p>3481 Melrose Place, Beverly Hills <br /> CA 90210</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-xs-12 mt-5">
              <div className="single_address sabr">
                <i className="ti-mobile"></i>
                <h4>Telefone</h4>
                <p>(+1) 517 397 7100</p>
                <p>(+1) 411 315 8138</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-xs-12 mt-5">
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
            <div className="offset-lg-1 col-lg-10 col-sm-12 col-xs-12">
              <div className="contact">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="">Nome</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="">Seu E-mail</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <label htmlFor="">Assunto</label>
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <label htmlFor="">Mensagem</label>
                      <textarea
                        rows={6}
                        name="message"
                        className="form-control"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn_one" title="Enviar sua mensagem!">Enviar Mensagem</button>
                    </div>
                  </div>
                </form>
                {mensagem && <p>{mensagem}</p>} {/* Exibe mensagem após envio */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
