'use client'

import VideoPopup from '@/modals/VideoPopup';
import React, { useState } from 'react';

// Definindo a interface para o tipo Service
interface Service {
  image: string;
  title: string;
  description: string;
  // Adicione outros campos conforme necessário
}

// Definindo a interface para as propriedades do componente
interface ServiceDetailsAreaProps {
  service: Service; // Tipo do serviço
}

const ServiceDetailsArea: React.FC<ServiceDetailsAreaProps> = ({ service }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="service_area section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-10 offset-lg-1 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="single_service_details">
                <img src={service.image} className="img-fluid" alt="image" />
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
              {/* Resto do conteúdo */}
              <div
                className="video-area"
                style={{
                  backgroundImage: `url(assets/img/video.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                }}
              >
                <a
                  onClick={() => setIsVideoOpen(true)}
                  style={{ cursor: 'pointer' }}
                  className="magnific_popup video-button"
                >
                  <i className="ti-image"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={'i810CxN5Q6Q'}
      />
    </>
  );
};

export default ServiceDetailsArea;
