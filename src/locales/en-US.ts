import { LocaleConfig, LocaleInterface } from '../types';

export default class Locale implements LocaleInterface {
  public config: LocaleConfig = {
    currency: {
      name: 'Dollar',
      plural: 'Dollars',
      symbol: '$',
      fractionalUnit: {
        name: 'Cent',
        plural: 'Cents',
        symbol: '¢',
      },
    },
    texts: {
      and: 'and',
      minus: 'minus',
      only: 'only',
      point: 'point',
    },
    numberWordsMapping: [
      { number: 1000000000000000, value: 'quadrillion' },
      { number: 1000000000000, value: 'trillion' },
      { number: 1000000000, value: 'billion' },
      { number: 1000000, value: 'million' },
      { number: 1000, value: 'thousand' },
      { number: 100, value: 'hundred' },
      { number: 90, value: 'ninety' },
      { number: 80, value: 'eighty' },
      { number: 70, value: 'seventy' },
      { number: 60, value: 'sixty' },
      { number: 50, value: 'fifty' },
      { number: 40, value: 'forty' },
      { number: 30, value: 'thirty' },
      { number: 20, value: 'twenty' },
      { number: 19, value: 'nineteen' },
      { number: 18, value: 'eighteen' },
      { number: 17, value: 'seventeen' },
      { number: 16, value: 'sixteen' },
      { number: 15, value: 'fifteen' },
      { number: 14, value: 'fourteen' },
      { number: 13, value: 'thirteen' },
      { number: 12, value: 'twelve' },
      { number: 11, value: 'eleven' },
      { number: 10, value: 'ten' },
      { number: 9, value: 'nine' },
      { number: 8, value: 'eight' },
      { number: 7, value: 'seven' },
      { number: 6, value: 'six' },
      { number: 5, value: 'five' },
      { number: 4, value: 'four' },
      { number: 3, value: 'three' },
      { number: 2, value: 'two' },
      { number: 1, value: 'one' },
      { number: 0, value: 'zero' },
    ],
    exactWordsMapping: [{ number: 100, value: 'one hundred' }],
  };
}
