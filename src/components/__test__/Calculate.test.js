import renderer from 'react-test-renderer';
import calculate from '../../logic/Calculate';

describe('expect output from a given operation', () => {
  test('should add two numbers ', () => {
    const obj = {
      total: '12',
      next: '10',
      operation: '+',
    };
    const button = '+';
    const outcome = calculate(obj, button);

    expect(outcome.total).toBe('22');
  });
  test(' should subtract 5 from 25 to get 20', () => {
    const obj = {
      total: '25',
      next: '5',
      operation: '-',
    };

    const button = '-';

    const outcome = calculate(obj, button);
    expect(outcome.total).toBe('20');
  });

  test('expect 50 modulo 7 to be equal 1', () => {
    const obj = {
      total: '50',
      next: '7',
      operation: '%',
    };

    const button = '%';

    const outcome = calculate(obj, button);

    expect(outcome.total).toBe('1');
  });
  test('expect the AC button to retun null value', () => {
    const obj = {
      total: '50',
      next: '7',
      operation: '%',
    };

    const button = 'AC';

    const result = calculate(obj, button);

    expect(result.total).toBe(null);
    expect(result.operation).toBeNull();
  });
});

describe('should match DOM snapshots', () => {
  it('should match the calculate DOM snapshot', () => {
    const tree = renderer.create(<calculate />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
