
import Count from '@/components/common/Count';
import React from 'react';

const counter_data = [
  {
    count: 27,
    title: 'Tribunais de Justiça Com Cadastro ativo',
    symbol: '+', // Novo campo para o símbolo
  },
  {
    count: 10,
    title: 'Anos de experiência no setor de Tecnologia ',
    symbol: '€', // Pode ser qualquer símbolo
  },
  {
    count: 8,
    title: 'Certificados na área de Tecnologia',
    symbol: '#', // Outro exemplo de símbolo
  },
  {
    count: 100,
    title: 'Compromisso com a Verdade e Ciência',
    symbol: '*', // Outro exemplo de símbolo
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