import Link from 'next/link';
import React from 'react';

const BlogAreaHomeOne = () => {
  return (
    <>
      <section className="blog_area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span>Blog & Notícias</span>
            <h2>Veja nossos últimos artigos e <br />novidades</h2>
          </div>
          <div className="row">
            {/* Postagem 1 */}
            <div
              className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="single_blog">
                <img
                  src="assets/img/blog/1.jpg"
                  className="img-fluid"
                  alt="Imagem do blog"
                />
                <span>
                  <Link href="/blog-details">Perícia Tecnológica</Link>
                </span>
                <span>15 de Fevereiro de 2024</span>
                <h3>
                  <Link href="/blog">
                    Novas Tendências em Perícia Tecnológica para 2024
                  </Link>
                </h3>
                <Link href="/blog" className="blog_btn">
                  Ver Detalhes <i className="ti-arrow-top-right"></i>
                </Link>
              </div>
            </div>
            {/* Postagem 2 */}
            <div
              className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="single_blog">
                <img
                  src="assets/img/blog/2.jpg"
                  className="img-fluid"
                  alt="Imagem do blog"
                />
                <span>
                  <Link href="/blog-details">Perícias Digitais</Link>
                </span>
                <span>10 de Janeiro de 2024</span>
                <h3>
                  <Link href="/blog">
                    A Importância da Perícia Digital em Processos Judiciais
                  </Link>
                </h3>
                <Link href="/blog" className="blog_btn">
                  Ver Detalhes <i className="ti-arrow-top-right"></i>
                </Link>
              </div>
            </div>
            {/* Postagem 3 */}
            <div
              className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="single_blog">
                <img
                  src="assets/img/blog/3.jpg"
                  className="img-fluid"
                  alt="Imagem do blog"
                />
                <span>
                  <Link href="/blog-details">Segurança Cibernética</Link>
                </span>
                <span>5 de Dezembro de 2023</span>
                <h3>
                  <Link href="/blog">
                    Dicas para Proteger seus Dados em Ambiente Digital
                  </Link>
                </h3>
                <Link href="/blog" className="blog_btn">
                  Ver Detalhes <i className="ti-arrow-top-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogAreaHomeOne;
