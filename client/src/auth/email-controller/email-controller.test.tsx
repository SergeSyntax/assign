import { renderController, screen } from 'test-utils';
import { EmailController } from './email-controller';

describe('<EmailController>', () => {
  it('should render email input', () => {
    renderController(EmailController);
    const emailInput = screen.getByRole('textbox', {
      name: /email/i,
    });

    expect(emailInput).toBeInTheDocument();
  });
});
