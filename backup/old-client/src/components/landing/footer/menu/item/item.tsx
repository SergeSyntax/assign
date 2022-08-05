import React from 'react';
import { LinkItemFooterMenu } from './link.style';
import { WrapperItemFooterMenu } from './wrapper.style';
import Link from 'next/link';

interface Props {
  title: string;
  path: string;
}

export const ItemMenuFooter: React.FC<Props> = ({ title, path }) => {
  return (
    <WrapperItemFooterMenu key={title}>
      <Link passHref href={path}>
        <LinkItemFooterMenu>{title} </LinkItemFooterMenu>
      </Link>
    </WrapperItemFooterMenu>
  );
};
