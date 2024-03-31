import { Link } from "react-router-dom";

import * as S from "./styles";

import success from "~/images/success.svg";

const CheckoutSuccess = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Compra realizada com sucesso!</S.Title>
        <S.DivImage>
          <S.Image src={success} alt="success-image" />
        </S.DivImage>
        <Link to="/">
          <S.ButtonBack>Voltar</S.ButtonBack>
        </Link>
      </S.Content>
    </S.Container>
  );
};
export default CheckoutSuccess;
