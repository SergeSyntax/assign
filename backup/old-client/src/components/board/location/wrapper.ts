import { Menu, styled } from '@mui/material';

export const WrapperMenuLocation = styled(Menu)`
  & .MuiPaper-root.MuiPopover-paper.MuiPopover-paper {
    min-width: 26rem;
    top: 0rem !important;
    left: 0rem !important;
    background: #ebecf0;

    .MuiList-padding {
      padding-top: 0.5rem;
      font-weight: 100;
      display: flex;
      flex-direction: column;
    }
  }
`;
