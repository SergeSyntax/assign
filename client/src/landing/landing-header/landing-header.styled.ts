import { Logo } from '../../common/logo';
import { moveInLeft, moveInRight } from './landing-header.keyframe';
import { Button, styled, css } from '@mui/material';
import { moveInBottom } from './landing-header.keyframe';

export const LandingHeaderWrapper = styled('div')`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-size: cover;
  overflow: hidden;

  background-image: linear-gradient(rgba(67, 67, 67, 0.8), rgba(0, 0, 0, 0.8)),
    url('/img/landing-header-background-xl.jpg');
  ${({ theme }) => css`
    ${theme.breakpoints.down('xl')} {
      background-image: linear-gradient(rgba(67, 67, 67, 0.8), rgba(0, 0, 0, 0.8)),
        url('/img/landing-header-background-lg.jpg');
    }
    ${theme.breakpoints.down('lg')} {
      background-image: linear-gradient(rgba(67, 67, 67, 0.8), rgba(0, 0, 0, 0.8)),
        url('/img/landing-header-background-md.jpg');
    }

    ${theme.breakpoints.down('md')} {
      background-image: linear-gradient(rgba(67, 67, 67, 0.8), rgba(0, 0, 0, 0.8)),
        url('/img/landing-header-background-sm.jpg');
    }

    ${theme.breakpoints.down('sm')} {
      background-image: linear-gradient(rgba(67, 67, 67, 0.8), rgba(0, 0, 0, 0.8)),
        url('/img/landing-header-background-xs.jpg');
    }
  `}
`;

export const LandingHeaderLogo = styled(Logo)`
  ${({ theme }) => css`
    & {
      animation: ${moveInLeft} 1s ease-out;
      align-self: flex-start;
      margin: 3rem;

      ${theme.breakpoints.down('sm')} {
        margin-top: 5rem;
        font-size: 5rem;
        align-self: center;
      }
    }
  `}
`;

export const LandingHeaderTitleWrapper = styled('h1')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    color: #fff;
    text-transform: uppercase;
    font-size: 6rem;
    letter-spacing: 2.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 10rem 0;
    font-weight: 300;
    margin-right: -3rem;

    ${theme.breakpoints.down('lg')} {
      font-size: 2.5rem;
      font-weight: 700;
    }

    ${theme.breakpoints.down('md')} {
      font-size: 2rem;
    }

    ${theme.breakpoints.down('sm')} {
      display: none;
    }
  `}
`;

export const LandingHeaderTitleMain = styled('span')`
  display: inline-block;
  animation: ${moveInLeft} 1s ease-out;
`;

export const LandingHeaderTitleSub = styled('span')`
  ${({ theme }) => css`
    display: inline-block;
    letter-spacing: 1.05em;
    font-size: 0.45em;
    font-weight: 700;
    animation: ${moveInRight} 1s ease-out;
    margin-left: -0.5rem;

    ${theme.breakpoints.down('lg')} {
      margin-top: 0.5rem;
      font-size: 1.78rem;
      font-weight: 500;
    }

    ${theme.breakpoints.down('md')} {
      font-size: 1.64rem;
    }
  `}
`;

export const LandingHeaderActions = styled('div')`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    ${theme.breakpoints.down('sm')} {
      flex-direction: column;
    }
  `}
`;

export const LandingHeaderButton = styled(Button)`
  && {
    ${({ theme }) => css`
      border-radius: 10rem;
      padding: 1rem 4rem;
      border-width: 0.2rem;
      transition: all 0.5s;
      position: relative;
      &:hover {
        transform: translateY(-0.3rem);
      }
      &:active {
        transform: translateY(-0.1rem);
      }

      ${theme.breakpoints.down('sm')} {
        padding: 2rem 4rem;
        font-size: 2rem;
      }
    `}
  }
`;

LandingHeaderButton.defaultProps = {
  color: 'inherit',
};

export const LandingHeaderButtonSecondary = styled(LandingHeaderButton)`
  && {
    animation: ${moveInBottom} 1s ease-out;
    animation-delay: 0.8s;
    animation-fill-mode: backwards;
    color: #e0e0e0;
    border-color: #e0e0e080;
    &:hover {
      background: #e0e0e0;
      color: #000;
    }
  }
`;

export const LandingHeaderButtonPrimary = styled(LandingHeaderButton)`
  && {
    ${({ theme }) => css`
      animation: ${moveInBottom} 1s ease-out;
      animation-delay: 0.5s;
      animation-fill-mode: backwards;
      margin-right: 3rem;
      background-color: #e0e0e0;
      color: rgba(0, 0, 0, 0.87);
      ${theme.breakpoints.down('sm')} {
        margin-right: 0;
        margin-bottom: 5rem;
        margin-top: 3rem;
      }
    `}
  }
`;
