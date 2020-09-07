import {
  MjmlDivider,
  MjmlDividerProps,
  ClassNameProps,
  PaddingProps
} from 'mjml-react';
import * as React from 'react';
import { THEME } from '../../theme';

type DivierProps = MjmlDividerProps & ClassNameProps & PaddingProps;
export const Divider = (props: DivierProps) => {
  return (
    <MjmlDivider
      borderColor={THEME.border.color}
      borderWidth={THEME.border.width}
      {...props}
    />
  );
};
