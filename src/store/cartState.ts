import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export interface CartItem {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

export const cartState = atom<CartItem[]>({
  key: 'cartState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
