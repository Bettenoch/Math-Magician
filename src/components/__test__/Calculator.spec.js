import { render, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

describe('test calculator buttons', () => {
  it('should clear the items in the calculator output and give 0', () => {
    // render component in the virtual dom
    render(<Calculator />);

    // select elements to interact with user
    const clear = screen.getByTestId('clear');
    const val = screen.getByTestId('output');

    // interact with buttons

    fireEvent.click(clear);

    expect(val).toHaveValue('0');
  });
  it('should match the text content', () => {
    render(<Calculator />);
    const modulo = screen.getByTestId('modulo');
    expect(modulo).toHaveTextContent('%');
  });
});

describe('Calculator snapshots', () => {
  it('should match the calculator DOM snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
