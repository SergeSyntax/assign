import { Container, styled, css } from '@mui/material';

export const VideoBackground = styled('video')`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  overflow: hidden;
  object-fit: cover;
`;

export const FeaturesContainer = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${theme.breakpoints.down('md')} {
      flex-direction: column;
      margin: 10rem 0;
    }
  `}
`;

export const FeaturesWrapper = styled('section')`
  background-color: rgba(255, 255, 255, 0.6);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
`;
