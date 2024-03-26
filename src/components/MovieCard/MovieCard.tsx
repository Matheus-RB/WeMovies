import * as S from "./styles";
import cart from "../../images/cart.svg";

interface Props {
  image: string;
  title: string;
  price: number;
}

export const MovieCard = ({ image, price, title }: Props) => {
  return (
    <S.Container>
      <S.SubContainer>
        <img src={image} alt={`image-${title}`} height={188} width={147} />
        <S.Title>{title}</S.Title>
        <S.Price>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </S.Price>
        <S.Button>
          <img src={cart} alt="cart-icon" />
          <span> Adicionar ao carrinho</span>
        </S.Button>
      </S.SubContainer>
    </S.Container>
  );
};
