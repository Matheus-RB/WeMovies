import { Link } from "react-router-dom";

import * as S from "./styles";

import handbag from "../../../images/Handbag.png";

const Header = () => {
  return (
    <S.Header>
      <S.Nav>
        <Link to="/">WeFit</Link>
        <S.itemRight>
          <S.subItemRight>
            <span>Meu carrinho</span>
            <S.amount>0 itens</S.amount>
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
