import { styled } from '@mui/material';
import { SmallTextField } from 'src/components/common/fields/text/small';

export const FieldFormHeaderSection = styled(SmallTextField)`
  && {
    .MuiInputBase-input {
      padding: 0.55rem 1rem;
      font-size: 1.5rem;
      font-weight: bold;
      height: inherit;
    }
  }
`;
