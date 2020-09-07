import { MjmlRaw } from 'mjml-react';
import * as React from 'react';
import { THEME } from '../../theme';

export type IColor = 'success' | 'warning' | 'error';

export const Badge = ({
  children,
  color
}: {
  children: React.ReactNode;
  color: IColor;
}) => (
  <MjmlRaw>
    <span
      style={{
        backgroundColor: THEME.colors[color].main,
        margin: 0,
        fontSize: THEME.fontSize.xs,
        color: 'white',
        width: '100%',
        padding: `${THEME.spacing.s}px ${THEME.spacing.m}px`,
        borderRadius: THEME.border.radius
      }}
    >
      {children}
    </span>
  </MjmlRaw>
);
