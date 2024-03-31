import * as S from "./styles";

export const Loader = () => {
  return (
    <S.SpinnerContainer>
      <S.OuterCircle />
      <S.InnerCircle />
    </S.SpinnerContainer>
  );
};
