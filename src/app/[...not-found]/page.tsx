// app/[...not-found]/page.js

import Error from "@/components/Error";
import Wrapper from "@/layouts/Wrapper";

// Metadata da página
export const metadata = {
  title: "404 error || Pericias Digitais",
};


const NotFoundPage = () => {
  return (
    <Wrapper>
      <Error />
    </Wrapper>
  );
};

export default NotFoundPage;
