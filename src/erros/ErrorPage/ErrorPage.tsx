import * as S from "./styles";

import errorpage from "~/images/error-page.svg";

export const ErrorPage = () => {
  return (
    <S.Container>
      <S.Image src={errorpage} alt="Not_Found-image" />
      <S.Title>Ops! Parece que temos um erro...</S.Title>
      <S.Div>
        <S.Paragraph>
          Pedimos desculpas pela inconveniência. Um erro inesperado aconteceu.
        </S.Paragraph>
        <S.Paragraph>
          Enquanto isso, você pode tentar atualizar a página ou voltar à página
          anterior. Se o problema persistir, entre em contato conosco para que
          possamos ajudá-lo a resolver o problema.
        </S.Paragraph>
      </S.Div>
    </S.Container>
  );
};
