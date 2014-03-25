var isNumber = require('../');
var test = require('tape');
var map = require('lodash.map');

test('returns `true` for numbers', function(t) {
  t.plan(2);

  t.ok(isNumber(0));
  t.ok(isNumber(new Number(0)));
});

test('returns `false` for non numbers', function(t) {
  t.plan(8);

  var falsey = [, '', 0, false, NaN, null, undefined];

  var expected = map(falsey, function(value) {
    return typeof value == 'number';
  });

  var actual = map(falsey, function(value, index) {
    return index ? isNumber(value) : isNumber();
  });

  t.ok(!isNumber(arguments));
  t.ok(!isNumber([1, 2, 3]));
  t.ok(!isNumber(true));
  t.ok(!isNumber(new Date));
  t.ok(!isNumber({'a': 1}));
  t.ok(!isNumber(/x/));
  t.ok(!isNumber('a'));

  t.deepEqual(expected, actual);
});

test('avoids `[xpconnect wrapped native prototype]` in Firefox', function(t) {
  t.plan(1);

  t.ok(isNumber(+'2'));
});