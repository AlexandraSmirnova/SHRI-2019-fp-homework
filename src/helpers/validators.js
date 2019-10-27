/* 
 * Основная задача — написать самому, или найти в FP библиотеках функции anyPass/allPass
 * Эти функции/их аналоги есть и в ramda и в lodash
 *
 * allPass — принимает массив функций-предикатов, и возвращает функцию-предикат, которая
 * вернет true для заданного списка аргументов, если каждый из предоставленных предикатов
 * удовлетворяет этим аргументам (возвращает true)
 *
 * anyPass — то же самое, только удовлетворять значению может единственная функция-предикат из массива.
 *
 * Если функции будут написаны руками (без использования библиотеки) это не является ошибкой, например:
 *
 * const greaterThenOne = x => x > 1;
 * const length = x => x.length;
 * const lengthGreaterThenOne = compose(greaterThenOne, length);
 * Это — ок.
 *
 * Вот такая запись не очень хорошая, все таки потренируйтесь составлять композиции:
 * const lengthGreaterThenOne = x => x.length > 1;
 */

import { replace, length, compose, contains, test, allPass, anyPass, curry, not } from 'ramda';

const replaceNumbers = replace(/[^0-9]/g, '');

const curriedContains = curry(contains);

const getNumbersCount = compose(length, replaceNumbers);

const containsOnlyEng = test(/^[a-zA-Z0-9.+]+$/);


const greaterThenOne = (x) => x > 1;

const greaterThenTwo = (x) => x > 2;

const greaterThenThree = (x) => x > 3;

const greaterThenFour = (x) => x > 4;

const greaterThenFive = (x) => x > 5;

const greaterThenEight = (x) => x > 8;


const lessThenTwo = (x) => x < 2;

const lessThenFour = (x) => x < 4;

const lessThenFive = (x) => x < 5;

const lessThenEight = (x) => x < 8;

const lessThenTen = (x) => x < 10;

/**
 * Функции для проверки выполнения условий с количеством цифр в строке
 */
const numbersMoreThenOne = compose(greaterThenOne, getNumbersCount);

const numbersMoreThenTwo = compose(greaterThenTwo, getNumbersCount);

const numbersMoreThenThree = compose(greaterThenThree, getNumbersCount);

const numbersMoreThenFour = compose(greaterThenFour, getNumbersCount);


const numbersLessThenTwo = compose(lessThenTwo, getNumbersCount);

const numbersLessThenFive = compose(lessThenFive, getNumbersCount);

/**
 * Функции для проверки выполнения условий с длиной строки
 */

const lengthGreaterThenFive = compose(greaterThenFive, length);

const lengthGreaterThenEight = compose(greaterThenEight, length);


const lengthLessThenFour = compose(lessThenFour, length);

const lengthLessThenFive = compose(lessThenFive, length);

const lengthLessThenEight = compose(lessThenEight, length);

const lengthLessThenTen = compose(lessThenTen, length);


/**
 * Функции для проверки наличия конкретного символа в строке
 */

const hasFourNumber = curriedContains(4);

const hasSevenNumber = curriedContains(7);

const doNotHasFourNumber = compose(not, hasFourNumber);


// 1. Длина < 5 и кол-во цифр > 2 шт.
export const validateFieldN1 = (x) => allPass([lengthLessThenFive, numbersMoreThenTwo])(x);

// 2. Длина < 5 и кол-во цифр < 2 шт.
export const validateFieldN2 = (x) => allPass([lengthLessThenFive, numbersLessThenTwo])(x);

// 3. Длина > 5 или кол-во цифр > 1 шт.
export const validateFieldN3 = (x) => allPass([lengthGreaterThenFive, numbersMoreThenOne])(x);

// 4. Длина < 10 и кол-во цифр > 2 шт. и одна из цифр равна "4"
export const validateFieldN4 = (x) => allPass([lengthLessThenTen, numbersMoreThenTwo, hasFourNumber])(x);

// 5. Длина < 10 и кол-во цифр > 1 шт. и ни одна из цифр не равна "4"
export const validateFieldN5 = (x) => allPass([lengthLessThenTen, numbersMoreThenOne, doNotHasFourNumber])(x);

// 6. Длина > 5, или одна из цифр равна "7"
export const validateFieldN6 = (x) => anyPass([lengthGreaterThenFive, hasSevenNumber])(x);

// 7. Длина > 8 и кол-во цифр > 3 шт. и только англ
export const validateFieldN7 = (x) => allPass([lengthGreaterThenEight, numbersMoreThenThree, containsOnlyEng])(x);

// 8. Кол-во цифр < 5 шт. или только англ или одна из цифр равна "7"
export const validateFieldN8 = (x) => anyPass([numbersLessThenFive, containsOnlyEng, hasSevenNumber])(x);

// 9. Длина < 8, кол-во цифр > 4 шт. только англ
export const validateFieldN9 = (x) => allPass([lengthLessThenEight, numbersMoreThenFour, containsOnlyEng])(x);

// 10. Длина < 4 или кол-во цифр > 2 шт. или только англ
export const validateFieldN10 = (x) => anyPass([lengthLessThenFour, numbersMoreThenTwo, containsOnlyEng])(x);
