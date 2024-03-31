import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";

import * as S from "./styles";

import trash from "~/images/Trash.svg";
import more from "~/images/more.svg";
import less from "~/images/less.svg";
import line from "~/images/line.svg";

import { cartState, type CartItem } from "~/store/cartState";
import { EmptyCart } from "~/components/EmptyCart/EmptyCart";

const Cart = () => {
  const [cartItems, setCartItems] = useRecoilState<CartItem[]>(cartState);
  const total = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleRemove = (id: number) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const handleIncrement = (id: number) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleDecrement = (id: number) => {
    const updatedCartItems = cartItems
      .map((item) => {
        if (item.id === id) {
          const updatedQuantity = Math.max(item.quantity - 1, 0);
          if (updatedQuantity === 0) {
            return undefined;
          }
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      })
      .filter((item) => item !== undefined) as CartItem[];

    setCartItems(updatedCartItems);
  };

  const getTotal = () => {
    return convertValue(
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    );
  };

  const convertValue = (value: number) => {
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleFinish = () => {
    setCartItems([]);
  };

  return (
    <S.Container>
      {cartItems.length === 0 || total === 0 ? (
        <EmptyCart />
      ) : (
        <S.Div>
          <S.Content>
            <S.Table>
              <thead>
                <tr>
                  <S.Th>Produto</S.Th>
                  <S.Th>Qtd</S.Th>
                  <S.Th>Subtotal</S.Th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <S.Td>
                      <S.Produto>
                        <S.Image src={item.image} alt={`image-${item.title}`} />
                        <S.Info>
                          <S.Title>{item.title}</S.Title>
                          <S.Price>{convertValue(item.price)}</S.Price>
                        </S.Info>
                      </S.Produto>
                    </S.Td>
                    <S.Td>
                      <S.QuantityDiv>
                        <S.QuantityButton
                          onClick={() => handleDecrement(item.id)}
                        >
                          <img src={less} alt="less-icon" />
                        </S.QuantityButton>
                        <S.Quantity>{item.quantity}</S.Quantity>
                        <S.QuantityButton
                          onClick={() => handleIncrement(item.id)}
                        >
                          <img src={more} alt="more-icon" />
                        </S.QuantityButton>
                      </S.QuantityDiv>
                    </S.Td>
                    <S.Td>
                      <S.PriceSubTotal>
                        {convertValue(item.price * item.quantity)}
                      </S.PriceSubTotal>
                    </S.Td>
                    <S.Td>
                      <S.TrashDiv>
                        <S.TrashButton onClick={() => handleRemove(item.id)}>
                          <img src={trash} alt="trash-icon" />
                        </S.TrashButton>
                      </S.TrashDiv>
                    </S.Td>
                  </tr>
                ))}
              </tbody>
            </S.Table>
            <img src={line} alt="line" width="100%" />
            <S.Footer>
              <Link to="/compra-finalizada">
                <S.ButtonFinish onClick={handleFinish}>
                  Finalizar pedido
                </S.ButtonFinish>
              </Link>
              <S.Total>
                <S.TotalLabel>Total</S.TotalLabel>
                <S.TotalValue>{getTotal()}</S.TotalValue>
              </S.Total>
            </S.Footer>
          </S.Content>
          <S.MobileVersion>
            {cartItems.map((item) => (
              <S.MobileContent key={item.id}>
                <S.Image src={item.image} alt={`image-${item.title}`} />
                <S.Produto>
                  <S.First>
                    <S.Title>{item.title}</S.Title>
                    <S.Info>
                      <S.Price>{convertValue(item.price)}</S.Price>
                      <S.TrashDiv>
                        <S.TrashButton onClick={() => handleRemove(item.id)}>
                          <img src={trash} alt="trash-icon" />
                        </S.TrashButton>
                      </S.TrashDiv>
                    </S.Info>
                  </S.First>
                  <S.Second>
                    <S.QuantityDiv>
                      <S.QuantityButton
                        onClick={() => handleDecrement(item.id)}
                      >
                        <img src={less} alt="less-icon" />
                      </S.QuantityButton>
                      <S.Quantity>{item.quantity}</S.Quantity>
                      <S.QuantityButton
                        onClick={() => handleIncrement(item.id)}
                      >
                        <img src={more} alt="more-icon" />
                      </S.QuantityButton>
                    </S.QuantityDiv>
                    <S.SubTotalDiv>
                      <span>SUBTOTAL</span>
                      <S.PriceSubTotal>
                        {convertValue(item.price * item.quantity)}
                      </S.PriceSubTotal>
                    </S.SubTotalDiv>
                  </S.Second>
                </S.Produto>
              </S.MobileContent>
            ))}
            <img src={line} alt="line" width="100%" height="1px" />
            <S.Footer>
              <S.Total>
                <S.TotalLabel>Total</S.TotalLabel>
                <S.TotalValue>{getTotal()}</S.TotalValue>
              </S.Total>
              <S.StyledLink to="/compra-finalizada">
                <S.ButtonFinish onClick={handleFinish}>Finalizar pedido</S.ButtonFinish>
              </S.StyledLink>
            </S.Footer>
          </S.MobileVersion>
        </S.Div>
      )}
    </S.Container>
  );
};

export default Cart;
