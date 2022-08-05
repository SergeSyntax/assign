import { Chip, emphasize, styled } from '@mui/material';

export const BoardChip = styled(Chip)`
  && {
    background: rgba(0%, 0%, 50%, 0.1);
    height: 2rem;
    font-weight: bold;
    color: inherit;
    font-size: 1.3rem;
    padding-left: 0.3rem;
    margin-bottom: 0.4rem;
    :hover,
    :focus {
      background: rgba(0%, 0%, 50%, 0.2);
    }

    .MuiChip-avatar,
    .MuiChip-deleteIcon {
      color: inherit;
      display: inline;
      width: 1.4rem;
      height: 1.4rem;
    }

    .MuiChip-deleteIcon {
      width: 1.8rem;
      height: 1.8rem;
      &:hover {
        color: inherit;
      }
    }

    &:active {
      box-shadow: ${({ theme }) => theme.shadows[1]};
      background: ${emphasize('rgba(0%,0%,50%,.2)', 0.12)};
    }
  }
`;
