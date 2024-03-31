import { useRecoilValue } from "recoil";

import * as S from "./styles";

import handbag from "~/images/Handbag.png";
import { cartState } from "~/store/cartState";

const Header = () => {
  const cartItems = useRecoilValue(cartState);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <S.Header>
      <S.Nav>
        <S.Name>
          <S.StyledLink to="/">WeFit</S.StyledLink>
        </S.Name>
        <S.itemRight>
          <S.subItemRight>
            <S.StyledLink to="carrinho">
              <span>Meu carrinho</span>
            </S.StyledLink>
            <S.amount>{totalItems} itens</S.amount>
          </S.subItemRight>
          <S.containerIMG>
            <img src={handbag} alt="handbag-icon" width={24} height={24} />
          </S.containerIMG>
        </S.itemRight>
      </S.Nav>
    </S.Header>
  );
};
export default Header;
