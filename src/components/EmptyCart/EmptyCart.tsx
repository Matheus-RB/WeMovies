import { Link } from "react-router-dom";

import * as S from "./styles";

import emptyCartImg from "~/images/empty-cart.png";

export const EmptyCart = () => {
  return (
    <S.Container>
      <S.Image src={emptyCartImg} alt="Empty cart" />
      <S.Text>Seu carrinho está vazio.</S.Text>
      <Link to="/">
        <S.Button>Voltar</S.Button>
      </Link>
    </S.Container>
  );
};
