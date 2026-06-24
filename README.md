![Tests](https://github.com/FreezeG2/kt1-sum/actions/workflows/test-and-deploy.yml/badge.svg?branch=source)

# Контрольная точка 1 — функция сложения

## Задание

Реализуйте функцию `sum`, которая принимает два числа и возвращает их сумму.

Файл с решением должен лежать по пути `src/sum.js` и экспортировать функцию:

```js
const sum = (a, b) => {
  // ваш код
};

module.exports = { sum };
```

## Проверка

Тесты лежат в `__tests__/sum.test.js`. Запустить локально:

```bash
npm test
```

Функция считается реализованной верно, если все тесты проходят.
