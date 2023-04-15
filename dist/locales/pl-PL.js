"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Złoty',
                plural: 'Złotych',
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
                {
                    number: 1000000000000000,
                    value: 'biliard',
                    plural: [
                        { from: 0, to: 1, value: 'biliardów' },
                        { from: 2, to: 4, value: 'biliardy' },
                        { from: 5, to: 20, value: 'biliardów' },
                    ],
                },
                {
                    number: 1000000000000,
                    value: 'bilion',
                    plural: [
                        { from: 0, to: 1, value: 'bilionów' },
                        { from: 2, to: 4, value: 'biliony' },
                        { from: 5, to: 20, value: 'bilionów' },
                    ],
                },
                {
                    number: 1000000000,
                    value: 'miliard',
                    plural: [
                        { from: 0, to: 1, value: 'miliardów' },
                        { from: 2, to: 4, value: 'miliardy' },
                        { from: 5, to: 20, value: 'miliardów' },
                    ],
                },
                {
                    number: 1000000,
                    value: 'milion',
                    plural: [
                        { from: 0, to: 1, value: 'milionów' },
                        { from: 2, to: 4, value: 'miliony' },
                        { from: 5, to: 20, value: 'milionów' },
                    ],
                },
                {
                    number: 1000,
                    value: 'tysiąc',
                    plural: [
                        { from: 0, to: 1, value: 'tysięcy' },
                        { from: 2, to: 4, value: 'tysiące' },
                        { from: 5, to: 20, value: 'tysięcy' },
                    ],
                },
                { number: 900, value: 'dziewięćset' },
                { number: 800, value: 'osiemset' },
                { number: 700, value: 'siedemset' },
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
}
exports.default = Locale;
