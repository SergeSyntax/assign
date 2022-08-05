import { Skeleton } from '@mui/material';
import React, { useRef } from 'react';
import { FONT_SIZE } from '../../../styles';
import { useWindowSize } from '../../common/window-size.hook';
import { SectionSkeleton, SECTION_TOTAL_WIDTH } from './section';
import { BoardSectionsSkeletonHeader } from './board-sections-skeleton-header.styled';
import { BoardSectionsSkeletonItem } from './board-sections-skeleton-item.styled';

const TASK_MIN_HEIGHT = 45;
const SECTION_MENU_BUTTON_RADIUS = 20;
const SECTION_HEADER_TEXT_HEIGHT = 5;
const SECTION_HEADER_TEXT_WIDTH = 140;

export const BoardSectionsSkeleton: React.FC = () => {
  const INITIAL_SECTION_WIDTH = 2;
  const sectionSkeletonRef = useRef<HTMLDivElement | null>(null);
  const height = sectionSkeletonRef.current?.clientHeight ?? 1;
  const { width } = useWindowSize();
  const sectionSkeletonNum = Math.ceil(width / SECTION_TOTAL_WIDTH) + INITIAL_SECTION_WIDTH;
  const taskSkeletonNum = Math.floor(height / (TASK_MIN_HEIGHT + 1 * FONT_SIZE));

  return (
    <>
      {Array.from({ length: sectionSkeletonNum }, (_, key) => (
        <SectionSkeleton ref={sectionSkeletonRef} key={key}>
          <BoardSectionsSkeletonHeader>
            <Skeleton
              variant="text"
              height={SECTION_HEADER_TEXT_HEIGHT}
              width={SECTION_HEADER_TEXT_WIDTH}
            />
            <Skeleton
              variant="circular"
              height={SECTION_MENU_BUTTON_RADIUS}
              width={SECTION_MENU_BUTTON_RADIUS}
            />
          </BoardSectionsSkeletonHeader>
          {Array.from({ length: taskSkeletonNum }, (_, key) => (
            <BoardSectionsSkeletonItem key={key} variant="rectangular" height={TASK_MIN_HEIGHT} />
          ))}
        </SectionSkeleton>
      ))}
    </>
  );
};
