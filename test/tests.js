import isEven from '../is-even.js';
const test = QUnit.test;

test('even or odd', function(assert) {
//Arrange
    const x = 5;
    const expected = false;

//Act 
    const result = isEven(x);
//Assert
    assert.equal(result, expected);
});