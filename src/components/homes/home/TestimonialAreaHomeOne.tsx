'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const testimonial_data = [
  {
    name: 'Maria Silva',
    description:
      'Excelente profissional! A perícia técnica realizada foi fundamental para o sucesso do nosso caso.',
  },
  {
    name: 'João Santos',
    description:
      'A equipe demonstrou grande conhecimento em tecnologia, nos ajudando a compreender detalhes complexos.',
  },
  {
    name: 'Ana Pereira',
    description:
      'Serviço de alta qualidade e atendimento personalizado. Recomendo para quem precisa de perícia tecnológica.',
  },
  {
    name: 'Carlos Oliveira',
    description:
      'Profissionais comprometidos e competentes. A análise técnica foi precisa e esclarecedora.',
  },
  {
    name: 'Fernanda Costa',
    description:
      'A perícia realizada superou nossas expectativas, fornecendo informações essenciais para o processo.',
  },
  {
    name: 'Ricardo Almeida',
    description:
      'Muito satisfeito com o trabalho realizado. A expertise em tecnologia fez toda a diferença.',
  },
];

const TestimonialAreaHomeOne = () => {
  return (
    <>
      <section className="testi_home_area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span>Depoimentos</span>
            <h2>
              Veja o que nossos clientes <br /> dizem sobre nós
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  1200: {
                    slidesPerView: 2,
                  },
                  1400: {
                    slidesPerView: 2,
                  },
                }}
                id="testimonial-slider"
                className="owl-carousel"
              >
                {testimonial_data.map((item, i) => (
                  <SwiperSlide key={i} className="testimonial">
                    <img src="assets/img/quote.png" alt="Aspas" />
                    <div className="testimonial_content">
                      <i className="ti-star"></i>{' '}
                      <i className="ti-star"></i>{' '}
                      <i className="ti-star"></i>{' '}
                      <i className="ti-star"></i>{' '}
                      <i className="ti-star"></i>{' '}
                      <p>{item.description}</p>
                    </div>
                    <div className="testi_pic_title">
                      <h4>{item.name}</h4>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialAreaHomeOne;
