import * as React from 'react';
import _ from 'lodash';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import MuiLink from '@mui/material/Link';
import { LinkProps } from './link.types';
import { Anchor } from './link.styled';
import { NextLink } from './next-link';

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/api-reference/next/link
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  {
    activeClassName = 'active',
    as,
    className,
    href,
    linkAs,
    noLinkStyle,
    role, // Link don't have roles.
    ...other
  },
  ref,
) {
  const router = useRouter();
  const pathname = typeof href === 'string' ? href : href?.pathname;

  const commonProps = {
    ...other,
    ref,
    className: clsx(className, {
      [activeClassName]: router.pathname === pathname && activeClassName,
    }),
  };

  if (typeof href === 'string' && (_.startsWith(href, 'http') || _.startsWith(href, 'mailto:'))) {
    if (noLinkStyle) return <Anchor {...commonProps} href={href} />;
    return <MuiLink {...commonProps} href={href} />;
  }

  if (noLinkStyle) return <NextLink {...commonProps} linkAs={linkAs || as} to={href} />;
  return <MuiLink component={NextLink} {...commonProps} linkAs={linkAs || as} to={href} />;
});
