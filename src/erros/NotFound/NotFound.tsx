import { Link } from "react-router-dom";

import * as S from "./styles";

import notfound from "~/images/not-found.png";

export const NotFound = () => {
  return (
    <S.Div>
      <S.Image src={notfound} alt="Not_Found-image" />
      <S.Title>Ops! Parece que você se perdeu...</S.Title>
      <S.Paragraph>
        Não foi possível encontrar esta página. Por favor, volte à página
        inicial para continuar navegando.
      </S.Paragraph>
      <Link to="/">
        <S.Button>Voltar</S.Button>
      </Link>
    </S.Div>
  );
};
