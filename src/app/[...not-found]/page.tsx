// Arquivo: pages/[...not-found].js ou app/[...not-found]/page.js

import Error from "@/components/Error";
import Wrapper from "@/layouts/Wrapper";

// Metadata da página
export const metadata = {
  title: "404 error || Pericias Digitais",
};

// Função para gerar parâmetros estáticos (necessária para exportação)
export function generateStaticParams() {
  return []; // Retornando um array vazio, pois não há parâmetros dinâmicos
}

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Error />
    </Wrapper>
  );
};

export default NotFoundPage;
