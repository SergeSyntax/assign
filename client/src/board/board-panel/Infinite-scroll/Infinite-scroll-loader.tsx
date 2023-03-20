import {
  Box,
  CircularProgress,
  circularProgressClasses,
  CircularProgressProps,
  Fade,
} from '@mui/material';
import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { InfiniteScrollLoaderWrapper } from './Infinite-scroll-loader-wrapper.styled';

interface InfiniteScrollLoaderProps {
  isFetchingMore: boolean;
  hasMore: boolean;
  handleFetchMore: () => void;
}

export const InfiniteScrollLoader: React.FC<InfiniteScrollLoaderProps> = ({
  isFetchingMore,
  hasMore,
  handleFetchMore,
  ...props
}) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const circularProgressProps: CircularProgressProps = {
    size: 40,
    thickness: 4,
  };

  const handleLoaderMount = () => {
    handleFetchMore();
  };

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  if (!hasMore) return null;

  return (
    <InfiniteScrollLoaderWrapper ref={ref}>
      <Fade
        onAnimationStart={() => loaderRef.current?.scrollIntoView()}
        onTransitionEnd={handleLoaderMount}
        timeout={200}
        in={inView && hasMore}
        unmountOnExit
      >
        <Box sx={{ position: 'relative' }} ref={loaderRef}>
          <CircularProgress
            variant="determinate"
            sx={{
              color: (theme) => theme.palette.grey[200],
            }}
            {...circularProgressProps}
            {...props}
            value={100}
          />
          <CircularProgress
            variant="indeterminate"
            disableShrink
            sx={{
              color: '#1a90ff',
              animationDuration: '350ms',
              position: 'absolute',
              left: 0,
              [`& .${circularProgressClasses.circle}`]: {
                strokeLinecap: 'round',
              },
            }}
            {...circularProgressProps}
            {...props}
          />
        </Box>
      </Fade>
    </InfiniteScrollLoaderWrapper>
  );
};
