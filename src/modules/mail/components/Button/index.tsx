import { MjmlButton } from 'mjml-react';
import * as React from 'react';
import { THEME } from '../../theme';

type Props = {
  color: 'primary' | 'secondary';
  href: string;
};

export const Button: React.FC<Props> = ({ color, href, children }) => {
  return (
    <MjmlButton
      padding={THEME.spacing.l}
      backgroundColor={THEME.colors[color].main}
      borderRadius="100px"
      fontSize={THEME.fontSize.m}
      href={href}
    >
      {children}
    </MjmlButton>
  );
};
