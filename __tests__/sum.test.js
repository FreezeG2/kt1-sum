const test = require('node:test');
const assert = require('node:assert');
const { sum } = require('../src/sum.js');

test('сумма 2 и 3 равна 5', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('сумма -1 и 1 равна 0', () => {
  assert.strictEqual(sum(-1, 1), 0);
});

test('сумма 0 и 0 равна 0', () => {
  assert.strictEqual(sum(0, 0), 0);
});
