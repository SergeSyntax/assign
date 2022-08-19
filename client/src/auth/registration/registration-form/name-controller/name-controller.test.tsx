import { renderController, screen } from 'test-utils';
import { NameController } from './name-controller';

describe('<NameController>', () => {
  it('should render name input', () => {
    renderController(NameController);
    const nameInput = screen.getByRole('textbox', {
      name: /name/i,
    });

    expect(nameInput).toBeInTheDocument();
  });
});
