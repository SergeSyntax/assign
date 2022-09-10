import { Tabs as MUITabs, Tab as TabMUI, Toolbar, AppBar, styled } from '@mui/material';
import { Logo } from 'src/common';

export const DashboardAppBar = styled(AppBar)`
  color: #626262;
  background: #fff;
`;

export const DashboardToolbar = styled(Toolbar)`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row;
  justify-items: center;
  align-items: center;
`;

export const DashboardLogo = styled(Logo)`
  color: inherit;
  font-size: 4rem;
  filter: drop-shadow(2px 2px 5px #323232);
  margin-top: -0.4rem;

  h1 {
    display: none;
  }
`;

export const Tabs = styled(MUITabs)`
  && {
    margin: 0rem auto 0 auto;
  }
`;

export const Tab = styled(TabMUI)`
  && {
    font-size: 1.2rem;
    min-width: 10rem;
    min-height: unset;
    line-height: 1.5;
    padding-top: 1rem;
    opacity: 0.9;
    &.MuiButtonBase-root > svg {
      font-size: 2.5rem;
    }
  }
`;

export const tabIndicatorProps: React.HTMLAttributes<HTMLDivElement> = {
  style: {
    background: '#6d6464',
  },
};
