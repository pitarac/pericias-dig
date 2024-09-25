'use client';
import React, { useState } from 'react';

const NewsletterAreaHomeOne = () => {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Adicione o tipo para o parâmetro 'e'
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Erro ao se inscrever');

      const data = await response.json();
      setMensagem(data.mensagem || 'Inscrição realizada com sucesso!');
      setEmail(''); // Limpa o campo após o envio
    } catch (error) {
      console.error('Erro:', error);
      setMensagem('Erro ao se inscrever. Tente novamente.');
    }
  };

  return (
    <>
      <section className="newsletter_area section-padding">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-10 offset-lg-1 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="subs_form">
                <h3>Inscreva-se na nossa newsletter, sem spam!</h3>
                <p>Mantenha-se atualizado sobre as últimas novidades e tendências em perícias tecnológicas.</p>
                <form onSubmit={handleSubmit} className="home_subs">
                  <input
                    type="text"
                    className="subscribe__input"
                    placeholder="Digite seu endereço de e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className="subscribe__btn"><i className="ti-new-window"></i></button>
                </form>
                {mensagem && <p>{mensagem}</p>} {/* Exibe mensagem após envio */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsletterAreaHomeOne;
