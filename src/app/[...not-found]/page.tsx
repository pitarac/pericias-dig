// app/[...not-found]/page.js

import Error from "@/components/Error";
import Wrapper from "@/layouts/Wrapper";

// Metadata da página
export const metadata = {
  title: "404 error || Pericias Digitais",
};

// Função para gerar parâmetros estáticos
export function generateStaticParams() {
  return [
    { notFound: ["service-details/1"] },
    { notFound: ["service-details/2"] },
    { notFound: ["service-details/3"] },
    { notFound: ["offline.json"] },
    { notFound: ["sw.js"] },
    // Adicione outras rotas dinâmicas que você espera que não existam
  ];
}

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Error />
    </Wrapper>
  );
};

export default NotFoundPage;
