import * as S from "./styles";

import nothing from "~/images/nothinghere.svg";

export const Anything = () => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <S.Container>
      <S.Content>
        <S.Title>Parece que não há nada por aqui :(</S.Title>
        <S.DivImage>
          <img src={nothing} alt="Nothing_Here-image" />
          <S.Line />
        </S.DivImage>
        <S.ButtonBack onClick={handleReload}>Recarregar página</S.ButtonBack>
      </S.Content>
    </S.Container>
  );
};
