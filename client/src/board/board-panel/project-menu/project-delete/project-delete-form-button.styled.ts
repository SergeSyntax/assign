import { styled, css } from '@mui/material';
import { SubmitButton } from '../../../common/buttons';

export const ProjectDeleteFormButton = styled(SubmitButton)`
  ${({ theme }) => css`
    && {
      transition: all 0.2s;
      color: #fff;
      font-size: 1.4rem;
      &,
      &:hover {
        background: ${theme.palette.error.main};
      }

      &:disabled {
        background: ${theme.palette.grey[300]};
      }
    }
  `}
`;

ProjectDeleteFormButton.defaultProps = {
  color: 'error',
  fullWidth: true,
};
