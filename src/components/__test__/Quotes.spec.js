import renderer from 'react-test-renderer';
import Quotes from '../Quotes';

describe('should display quotes', () => {
  it('should show one comment', () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
