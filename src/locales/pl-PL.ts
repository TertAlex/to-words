import { LocaleConfig, LocaleInterface } from '../types';

export default class Locale implements LocaleInterface {
  public config: LocaleConfig = {
    currency: {
      name: 'Złoty',
      plural: 'Złoty',
      symbol: 'zł',
      fractionalUnit: {
        name: 'Grosz',
        plural: 'Groszy',
        symbol: 'gr',
      },
    },
    texts: {
      and: 'oraz',
      minus: 'minus',
      only: 'tylko',
      point: 'punkt',
    },
    numberWordsMapping: [
      { number: 1000000000000000, value: 'kwadrylion' },
      { number: 1000000000000, value: 'trylion' },
      { number: 1000000000, value: 'miliard' },
      { number: 1000000, value: 'milion' },
      { number: 1000, value: 'tysiąć' },
      { number: 900, value: 'dziewięćset' },
      { number: 800, value: 'osiemset' },
      { number: 700, value: 'siedemset ' },
      { number: 600, value: 'sześćset' },
      { number: 500, value: 'pięćset' },
      { number: 400, value: 'czterysta' },
      { number: 300, value: 'trzysta' },
      { number: 200, value: 'dwieście' },
      { number: 100, value: 'sto' },
      { number: 90, value: 'dziewięćdziesiąt' },
      { number: 80, value: 'osiemdziesiąt' },
      { number: 70, value: 'siedemdziesiąt' },
      { number: 60, value: 'sześćdziesiąt' },
      { number: 50, value: 'pięćdziesiąt' },
      { number: 40, value: 'czterdzieści' },
      { number: 30, value: 'trzydzieści' },
      { number: 20, value: 'dwadzieścia' },
      { number: 19, value: 'dziewiętnaście' },
      { number: 18, value: 'osiemnaście' },
      { number: 17, value: 'siedemnaście' },
      { number: 16, value: 'szesnaście' },
      { number: 15, value: 'piętnaście' },
      { number: 14, value: 'czternaście' },
      { number: 13, value: 'trzynaście' },
      { number: 12, value: 'dwanaście' },
      { number: 11, value: 'jedenaście' },
      { number: 10, value: 'dziesięć' },
      { number: 9, value: 'dziewięć' },
      { number: 8, value: 'osiem' },
      { number: 7, value: 'siedem' },
      { number: 6, value: 'sześć' },
      { number: 5, value: 'pięć' },
      { number: 4, value: 'cztery' },
      { number: 3, value: 'trzy' },
      { number: 2, value: 'dwa' },
      { number: 1, value: 'jeden' },
      { number: 0, value: 'zero' },
    ],
    namedLessThan1000: true,
  };
}
