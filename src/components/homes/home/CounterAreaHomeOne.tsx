
import Count from '@/components/common/Count';
import React from 'react';

const counter_data = [
  {
    count: 10,
    title: 'Anos de Experiência em Perícias',
  },
  {
    count: 150,
    title: 'Casos Periciados com Sucesso',
  },
  {
    count: 12,
    title: 'Certificações Profissionais',
  },
  {
    count: 200,
    title: 'laudos',
  },
]

const CounterAreaHomeOne = ({style_2, style_3} : any) => {
  return (
    <>
      <section className={`counter_feature ${style_3 ? '' : style_2 ? 'section-padding' : 'count_area' }`}>
        <div className="container">
          <div className="row text-center">
            {counter_data.map((item, i) => (
              <div key={i} className="col-lg-3 col-sm-6 col-xs-12 no-padding">
                <div className="single-project">
                  <h2 className="counter-num">
                    <Count number={item.count} add_style={true} />
                  </h2>
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))} 
          </div>
        </div>
      </section>
    </>
  );
};

export default CounterAreaHomeOne;