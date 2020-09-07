import {
  ClassNameProps,
  MjmlText,
  MjmlTextProps,
  PaddingProps,
  RequiredChildrenProps
} from 'mjml-react';
import * as React from 'react';
import { THEME } from '../../theme';

export const SubHeading: React.FC<
  MjmlTextProps & RequiredChildrenProps & PaddingProps & ClassNameProps
> = (props) => {
  return (
    <MjmlText
      fontWeight={700}
      align="center"
      fontSize={THEME.fontSize.l}
      {...props}
    />
  );
};
