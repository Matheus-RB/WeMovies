import { useRecoilState } from "recoil";

import * as S from "./styles";

import cart from "~/images/cart.svg";
import { cartState, type CartItem } from "~/store/cartState";

interface Props {
  id: number;
  image: string;
  title: string;
  price: number;
}

export const MovieCard = ({ id, image, price, title }: Props) => {
  const [cartItems, setCartItems] = useRecoilState(cartState);

  const handleAddToCart = () => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex] = {
        ...updatedCartItems[existingItemIndex],
        quantity: updatedCartItems[existingItemIndex].quantity + 1,
      };
      setCartItems(updatedCartItems);
    } else {
      const newItem: CartItem = { id, title, image, price, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }
  };

  const quantityInCart = cartItems.find((item) => item.id == id)?.quantity || 0;

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
        <S.Button onClick={handleAddToCart} quantityInCart={quantityInCart}>
          <S.QuantityVan>
            <img src={cart} alt="cart-icon" />
            {quantityInCart}
          </S.QuantityVan>
          <span> Adicionar ao carrinho</span>
        </S.Button>
      </S.SubContainer>
    </S.Container>
  );
};
