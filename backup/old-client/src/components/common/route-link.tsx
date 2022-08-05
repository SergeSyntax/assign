import Link from 'next/link';
import { styled } from '@mui/material';

import MaterialLink, { LinkProps } from '@mui/material/Link';

const MaterialLinkStyled = styled(MaterialLink)`
  white-space: nowrap;
  padding: 0 0.5rem;
  font-weight: bold;
`;

interface Props extends LinkProps {
  href: string;
}

export const RouteLink = (props: React.PropsWithChildren<Props>): React.ReactElement => (
  <Link {...props}>
    <MaterialLinkStyled {...props}>{props.children}</MaterialLinkStyled>
  </Link>
);
