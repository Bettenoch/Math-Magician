import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../Home';

describe('Home snapshots', () => {
  it('should match the Home DOM snapshots', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('test Home content', () => {
  it('should match the text content', () => {
    render(<Home />);
    const welcome = screen.getByTestId('welcome-page');
    expect(welcome).toHaveTextContent('Welcome to our page!');
  });
});
