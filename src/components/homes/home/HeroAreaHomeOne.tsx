
'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import VideoPopup from '@/modals/VideoPopup';

const HeroAreaHomeOne = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <section className="home_bg hb_height"
        style={{ backgroundImage: `url(/assets/img/bg/home-bg.jpg)`, backgroundSize: "cover", backgroundPosition: "center center" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-sm-12 col-xs-12">
              <div className="hero-text ht_top">
                <h1>Especialista em Perícias de Tecnologia</h1>
                <p>Oferecemos serviços especializados em perícias judiciais, com análises técnicas detalhadas para auxiliar a justiça na tomada de decisões. Nossa experiência em tecnologia e perícia digital garante resultados precisos e imparciais.</p>
              </div>
              <div className="home_btns">
                <Link href="/about" className="btn_one">Conheça</Link>
                <a className="video-play" 
                onClick={() => setIsVideoOpen(true)}
                style={{ cursor: "pointer" }} 
                ><i className="ti-image"></i> <span className="video-title">Video </span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={'i810CxN5Q6Q'}
      />
      {/* video modal end */}
    </>
  );
};

export default HeroAreaHomeOne;