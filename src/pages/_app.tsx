import '../styles/index.css'; 
import '../styles/style.scss'; 
import Wrapper from '@/layouts/Wrapper'; // ajuste o caminho conforme necessário

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default MyApp;
