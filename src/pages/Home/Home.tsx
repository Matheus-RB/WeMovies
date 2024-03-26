import * as S from "./styles";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { useEffect, useState } from "react";
import data from "../../data.json";

interface Data {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Home = () => {
  const [dataList, setDataList] = useState<Data[]>([]);

  useEffect(() => {
    setDataList(data);
  }, []);

  return (
    <S.Container>
      {dataList &&
        dataList.map((item) => (
          <MovieCard
            key={item.id}
            image={item.image}
            price={item.price}
            title={item.title}
          />
        ))}
    </S.Container>
  );
};
export default Home;
