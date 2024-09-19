import Error from "@/components/Error";
import Wrapper from "@/layouts/Wrapper";


export const metadata = {
  title: "404 error || Pericias Digitais",
};

const index = () => {
  return (
    <Wrapper>
      <Error />
    </Wrapper>
  );
};

export default index;