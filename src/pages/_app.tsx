// src/pages/_app.tsx
import { AppProps } from 'next/app'; // Importando o tipo AppProps
import Wrapper from '@/layouts/Wrapper'; // ajuste o caminho conforme necessário

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default MyApp;
