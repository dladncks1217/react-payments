import type { CardType } from '../type';
import { LOCAL_STORAGE_CARD_LIST } from './constants';

export const fetchNewCardData = (data: CardType): boolean => {
  const getData = localStorage.getItem(LOCAL_STORAGE_CARD_LIST);

  if (getData) {
    const dataToArr = JSON.parse(getData);

    // eslint-disable-next-line array-callback-return
    const sameNumbers = dataToArr.filter((card: CardType) => {
      const { cardNumber } = card;
      const keys = Object.keys(cardNumber) as ('first' | 'second' | 'third' | 'fourth')[];
      let cardNumberSerial = '';
      let fetchCardNumberSerial = '';
      for (const key of keys) {
        cardNumberSerial += cardNumber[key];
        fetchCardNumberSerial += data.cardNumber[key];
      }

      if (cardNumberSerial.includes(fetchCardNumberSerial)) return true;
    });

    if (sameNumbers.length > 0) return false;
    dataToArr.push(data);
    localStorage.setItem('cardList', JSON.stringify(dataToArr));
    return true;
  }

  localStorage.setItem('cardList', JSON.stringify([data]));
  return true;
};
