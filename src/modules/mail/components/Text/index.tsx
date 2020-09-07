import {
  ClassNameProps,
  MjmlText,
  MjmlTextProps,
  PaddingProps,
  RequiredChildrenProps
} from 'mjml-react';
import * as React from 'react';
import { THEME } from '../../theme';

export const Text: React.FC<
  MjmlTextProps & RequiredChildrenProps & PaddingProps & ClassNameProps
> = props => {
  return (
    <MjmlText
      {...props}
      lineHeight={`${THEME.fontSize.xl}px`}
      fontSize={THEME.fontSize.m}
    />
  );
};
