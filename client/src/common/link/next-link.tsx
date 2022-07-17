import * as React from 'react';
import _ from 'lodash';
import Link from 'next/link';
import { Anchor } from './link.style';
import { NextLinkComposedProps } from './link.type';

export const NextLink = React.forwardRef<HTMLAnchorElement, NextLinkComposedProps>(
  function NextLink({ to, linkAs, replace, scroll, shallow, prefetch, locale, ...other }, ref) {
    return (
      <Link
        href={to}
        prefetch={prefetch}
        as={linkAs}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref
        locale={locale}
      >
        <Anchor ref={ref} {...other} />
      </Link>
    );
  }
);
