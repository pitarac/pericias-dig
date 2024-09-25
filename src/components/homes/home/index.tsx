

import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroAreaHomeOne from './HeroAreaHomeOne'; 
import AboutAreaHomeOne from './AboutAreaHomeOne';
import ServiceAreaHomeOne from './ServiceAreaHomeOne';
import AoutUsAreaHomeOne from './AoutUsAreaHomeOne';
import PortfolioAreaHomeOne from './PortfolioAreaHomeOne';
import ChooseAreaHomeOne from './ChooseAreaHomeOne';

import TestimonialAreaHomeOne from './TestimonialAreaHomeOne';

import NewsletterAreaHomeOne from './NewsletterAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import CounterAreaHomeOne from './CounterAreaHomeOne';

const HomeOne = () => {
  return (
    <>
       <HeaderOne />
       <HeroAreaHomeOne />
       <CounterAreaHomeOne />
       <AboutAreaHomeOne />
       <ServiceAreaHomeOne />
       <AoutUsAreaHomeOne />
       <PortfolioAreaHomeOne />
       <ChooseAreaHomeOne />
       
       <TestimonialAreaHomeOne />
       
       <NewsletterAreaHomeOne />
       <FooterOne />
    </>
  );
};

export default HomeOne;