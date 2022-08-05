import { styled } from '@mui/material';
import { SmallTextField } from 'src/components/common/fields/text/small';

export const FieldTitleTask = styled(SmallTextField)`
  .MuiOutlinedInput-root.MuiInputBase-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.MuiInputBase-formControl {
  }

  && {
    .MuiInputBase-multiline {
      padding: 1rem 2rem;
    }

    .MuiInputBase-input {
      font-size: 2.3rem;
      font-weight: bold;
      height: inherit;
      width: 100%;
      min-height: 3rem;
      padding: 0;
    }
  }
`;
