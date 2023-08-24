import operate from '../../logic/operate';

describe('should perform given calculation', () => {
  test('should divide 25 by 5 to give 5', () => {
    const divide = operate('25', '5', '÷');
    expect(divide).toEqual('5');
  });
  test('should add 25 by 5 to give 50', () => {
    const add = operate('25', '5', '+');
    expect(add).toEqual('30');
  });
  test('should subtract 25 by 5 to give 5', () => {
    const subtract = operate('25', '5', '-');
    expect(subtract).toEqual('20');
  });
  test('should multiply 5 by 5 to give 25', () => {
    const multiply = operate('5', '5', 'x');
    expect(multiply).toEqual('25');
  });
});
