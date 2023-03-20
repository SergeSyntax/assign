import React from 'react';
import Image from 'next/image';
import notFound from '../../public/img/not-found.svg';

interface NotFoundIllustrationProps {
  searchValue?: string;
}

export const NotFoundIllustration: React.FC<NotFoundIllustrationProps> = ({ searchValue }) => {
  if (searchValue?.length)
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            height: '15rem',
            display: 'flex',
          }}
        >
          <Image alt="Vercel logo" src={notFound} />
        </div>
        <p
          style={{
            textAlign: 'center',
            display: 'inherit',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Sorry, We couldn&#39;t find a single match for
          <q
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: '30rem',
            }}
          >
            {searchValue}
          </q>
        </p>
      </div>
    );
  return <>create new value</>;
};
