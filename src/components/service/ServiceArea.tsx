'use client';

import Link from 'next/link';
import React from 'react';
import servicesData from '../../data/services.json'; // ajuste o caminho conforme necessário

const ServiceArea = () => {
  return (
    <>
      <section className="service_area section-padding">
        <div className="container">
          <div className="row">
            {servicesData.map((service, index) => (
              <div key={index} className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay={`0.${index + 1}s`} data-wow-offset="0">
                <div className="single_service">
                  <img src={service.image} className="img-fluid" alt="image" />
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceArea;
