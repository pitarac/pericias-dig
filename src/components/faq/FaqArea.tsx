'use client'
import React, { useState } from 'react';

const faq_data = [
  {
    id: "One",
    question: `O que é uma perícia judicial em tecnologia?`,
    answer: `A perícia judicial em tecnologia é uma análise técnica realizada por um especialista para investigar questões relacionadas a sistemas de informação, segurança cibernética, falhas em softwares e outros aspectos técnicos no contexto de uma disputa judicial.`,
  },
  {
    id: "Two",
    question: `Quando uma perícia em tecnologia é necessária?`,
    answer: `A perícia em tecnologia é necessária quando há litígios que envolvem problemas técnicos, como violação de sistemas, fraudes digitais, falhas de software, disputas contratuais envolvendo TI, entre outros.`,
  },
  {
    id: "Three",
    question: `Como é feito o laudo pericial?`,
    answer: `O perito judicial elabora um laudo técnico após a análise detalhada das provas e sistemas envolvidos, oferecendo uma explicação imparcial e técnica dos fatos relacionados ao caso.`,
  },
  {
    id: "Four",
    question: `Qual o prazo para a entrega de um laudo pericial?`,
    answer: `O prazo para entrega do laudo pode variar dependendo da complexidade do caso, mas geralmente é entregue em 10 dias úteis`,
  },
  {
    id: "Five",
    question: `Quais são os principais tipos de perícia em tecnologia?`,
    answer: `Os principais tipos de perícia incluem a análise forense de dispositivos, investigação de fraudes digitais, auditoria de sistemas de informação, verificação de códigos e softwares, entre outros.`,
  },
];

const FaqArea = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleActive = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <section className="faq_area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span>Dúvidas</span>
            <h2>Veja todas as perguntas <br /> e respostas</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <div className="accordion" id="accordionExample">
                {faq_data.map((item, i) => (
                  <div key={i} className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${activeIndex === i ? 'active' : ''}`}
                        type="button"
                        onClick={() => toggleActive(i)}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${activeIndex === i ? 'show' : ''}`}
                      aria-labelledby={`heading${item.id}`}
                    >
                      <div className="accordion-body">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqArea;
