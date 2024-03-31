import useSWR from "swr";

import * as S from "./styles";

import { Anything, MovieCard } from "~/components";

interface Data {
  products: {
    id: number;
    title: string;
    price: number;
    image: string;
  }[];
}

const Home = () => {
  const { data } = useSWR<Data>("https://wefit-movies.vercel.app/api/movies", {
    suspense: true,
  });

  return (
    <S.Container>
      {data && data?.products.length > 0 ? (
        <S.Content>
          {data &&
            data.products.map((item) => (
              <MovieCard
                id={item.id}
                key={item.id}
                image={item.image}
                price={item.price}
                title={item.title}
              />
            ))}
        </S.Content>
      ) : (
        <Anything />
      )}
    </S.Container>
  );
};
export default Home;
