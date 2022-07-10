import { styled, css, Container } from '@mui/material';

export const AboutContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

AboutContainer.defaultProps = { maxWidth: 'lg' };

export const AboutImage = styled('img')`
  ${({ theme }) => css`
    flex: 1;
    max-width: 50rem;
    display: flex;
    justify-content: center;
    align-items: center;
    ${theme.breakpoints.down('md')} {
      display: none;
    }
  `}
`;

export const AboutWrapper = styled('section')`
  min-height: 100vh;
  background: #edf0f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RubricsWrapper = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
