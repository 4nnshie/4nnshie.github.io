"use strict";

function sum(array) {
    if (array === undefined) return NaN;
    if (array.length === 0) return NaN;
    return array.reduce((a, b) => (a + b), 0);
}

function multiply(array) {
    if (array === undefined) return NaN;
    if (array.length === 0) return NaN;
    return array.reduce((a, b) => (a * b), 1);
}

function reverse(str) {
    if (str === undefined) return NaN;
    if (str.length === 0) return NaN;
    return str.split('').reduce((r, c) => c + r, '');
}

function filterLongWords(array, v) {
    if (array === undefined || v === undefined) return NaN;
    if (array.length === 0 || v <= 0) return NaN;
    return array.filter(word => word.length > v);
}
