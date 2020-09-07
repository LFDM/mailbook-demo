import * as React from 'react';
import { THEME } from '../../theme';

type Props = {
  variant?: 'plain' | 'footer';
  href: string;
};

export const Link: React.FC<Props> = ({ variant, href, children }) => {
  const style =
    variant === 'footer'
      ? { color: 'inherit', textDecoration: 'none' }
      : { color: THEME.colors.primary.main, textDecoration: 'none' };

  return (
    <a style={style} href={href}>
      {children || href}
    </a>
  );
};
