import React from 'react';
import Link from 'next/link';

const BlogArea = () => {
  return (
    <>
      <section className="blog_area section-padding">
        <div className="container">
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
                    Novas Tecnologias na Perícia Digital
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
                  <Link href="/blog-details">Análise Forense</Link>
                </span>
                <span>10 de Janeiro de 2024</span>
                <h3>
                  <Link href="/blog">
                    A Importância da Análise Forense em Dispositivos Móveis
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
                    Como Proteger Seus Dados Contra Ataques Hackers
                  </Link>
                </h3>
                <Link href="/blog" className="blog_btn">
                  Ver Detalhes <i className="ti-arrow-top-right"></i>
                </Link>
              </div>
            </div>
            {/* Postagem 4 */}
            <div
              className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="single_blog">
                <img
                  src="assets/img/blog/4.jpg"
                  className="img-fluid"
                  alt="Imagem do blog"
                />
                <span>
                  <Link href="/blog-details">Perícias Judiciais</Link>
                </span>
                <span>20 de Novembro de 2023</span>
                <h3>
                  <Link href="/blog">
                    O Papel da Perícia Tecnológica em Processos Judiciais
                  </Link>
                </h3>
                <Link href="/blog" className="blog_btn">
                  Ver Detalhes <i className="ti-arrow-top-right"></i>
                </Link>
              </div>
            </div>
            {/* Postagem 5 */}
            <div
              className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="single_blog">
                <img
                  src="assets/img/blog/5.jpg"
                  className="img-fluid"
                  alt="Imagem do blog"
                />
                <span>
                  <Link href="/blog-details">Tecnologia</Link>
                </span>
                <span>15 de Outubro de 2023</span>
                <h3>
                  <Link href="/blog">
                    Evolução da Tecnologia e Seus Impactos Legais
                  </Link>
                </h3>
                <Link href="/blog" className="blog_btn">
                  Ver Detalhes <i className="ti-arrow-top-right"></i>
                </Link>
              </div>
            </div>
            {/* Postagem 6 */}
            <div
              className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset="0"
            >
              <div className="single_blog">
                <img
                  src="assets/img/blog/6.jpg"
                  className="img-fluid"
                  alt="Imagem do blog"
                />
                <span>
                  <Link href="/blog-details">Dicas de Segurança</Link>
                </span>
                <span>1 de Setembro de 2023</span>
                <h3>
                  <Link href="/blog">
                    10 Dicas para Proteger Seus Dados Pessoais Online
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

export default BlogArea;
